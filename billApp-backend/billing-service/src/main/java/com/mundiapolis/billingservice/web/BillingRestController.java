package com.mundiapolis.billingservice.web;

import com.mundiapolis.billingservice.entities.Bill;
import com.mundiapolis.billingservice.feign.CustomerRestClient;
import com.mundiapolis.billingservice.feign.ProductItemRestClient;
import com.mundiapolis.billingservice.model.Customer;
import com.mundiapolis.billingservice.model.Product;
import com.mundiapolis.billingservice.repository.BillRepository;
import com.mundiapolis.billingservice.repository.ProductItemRepository;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.keycloak.representations.AccessToken;
import org.springframework.hateoas.PagedModel;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;

@RestController
public class BillingRestController {
    private BillRepository billRepository;
    private ProductItemRepository productItemRepository;
    private CustomerRestClient customerRestClient;
    private ProductItemRestClient productItemRestClient;

    public BillingRestController(BillRepository billRepository, ProductItemRepository productItemRepository, CustomerRestClient customerRestClient, ProductItemRestClient productItemRestClient) {
        this.billRepository = billRepository;
        this.productItemRepository = productItemRepository;
        this.customerRestClient = customerRestClient;
        this.productItemRestClient = productItemRestClient;
    }

    @GetMapping("/fullbill")
    @PreAuthorize("hasAuthority('USER')")
    public Collection<Bill> getAllBill(){
        Collection<Bill> bills = billRepository.findAll();
        bills.forEach(b->{
            Customer c = customerRestClient.getCustomerById(b.getCustomer_id());
            b.setCustomer(c);
            b.getProductItems().forEach(p->{
                Product product = productItemRestClient.getProductById(p.getProduct_id());
                p.setProduct(product);
                p.setProduct_name(product.getName());
            });
        });
        return bills;
    }

    @GetMapping(path = "/fullbill/{id}")
    public Bill getBill(@PathVariable(name = "id") Long id){
        Bill bill = billRepository.findById(id).get();
        Customer customer = customerRestClient.getCustomerById(bill.getCustomer_id());
        bill.setCustomer(customer);
        bill.getProductItems().forEach(p->{
            Product product = productItemRestClient.getProductById(p.getProduct_id());
            p.setProduct(product);
            p.setProduct_name(product.getName());
        });
        return bill;
    }

    @PostMapping("/fullbill")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Bill addBill(@RequestBody Bill bill, Principal principal){
        KeycloakAuthenticationToken authenticationToken = (KeycloakAuthenticationToken) principal;
        AccessToken token = authenticationToken.getAccount().getKeycloakSecurityContext().getToken();

        String username =  token.getPreferredUsername();
        return billRepository.save(bill);
    }
}
