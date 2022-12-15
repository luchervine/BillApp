package com.mundiapolis.billingservice;

import com.mundiapolis.billingservice.entities.Bill;
import com.mundiapolis.billingservice.entities.ProductItem;
import com.mundiapolis.billingservice.feign.CustomerRestClient;
import com.mundiapolis.billingservice.feign.ProductItemRestClient;
import com.mundiapolis.billingservice.model.Customer;
import com.mundiapolis.billingservice.model.Product;
import com.mundiapolis.billingservice.repository.BillRepository;
import com.mundiapolis.billingservice.repository.ProductItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.hateoas.PagedModel;

import java.util.Collection;
import java.util.Date;
import java.util.Random;

@SpringBootApplication
@EnableFeignClients
public class BillingServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BillingServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner start(BillRepository billRepository, ProductItemRepository productItemRepository,
                            CustomerRestClient customerRestClient, ProductItemRestClient productItemRestClient){
        return args -> {
            Customer customer = customerRestClient.getCustomerById(1L);
            Bill bill = billRepository.save(new Bill(null, new Date(), null, customer.getId(), customer));
            PagedModel<Product> productsPageModel = productItemRestClient.pageProducts(0,20);
            productsPageModel.forEach(p->{
                ProductItem productItem = new ProductItem();
                productItem.setPrice(p.getPrice());
                productItem.setQuantity(new Random().nextInt(p.getQuantity()));
                productItem.setBill(bill);
                productItem.setProduct_id(p.getId());
                productItemRepository.save(productItem);
            });
            //Collection<Customer> customers = customerRestClient.getAllCustomers();
            //System.out.println("Customers : "+customers.toString());
            System.out.println("---------------------------------------------");
            System.out.println(customer.getId()+" | "+customer.getName()+ " | "+customer.getEmail());
        };
    }

}
