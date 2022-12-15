package com.mundiapolis.customerservice.config;


import com.mundiapolis.customerservice.entities.Customer;
import com.mundiapolis.customerservice.repository.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@Configuration
public class CustomerConfig {

    private final CustomerRepository customerRepository;
    private final RepositoryRestConfiguration configuration ;

    public CustomerConfig(CustomerRepository customerRepository, RepositoryRestConfiguration configuration) {
        this.customerRepository = customerRepository;
        this.configuration = configuration;
    }

    @Bean
    CommandLineRunner init_customer(){
        return args -> {
            configuration.exposeIdsFor(Customer.class);
            if(customerRepository.count()==0) {
                customerRepository.save(new Customer(null, "luc", "luc@gmail.com"));
                customerRepository.save(new Customer(null, "mouad", "mouad@gmail.com"));
                customerRepository.save(new Customer(null, "Yassine", "yassine@gmail.com"));
                customerRepository.save(new Customer(null, "Salaima", "salima@gmail.com"));
                customerRepository.findAll().forEach(customer -> {
                    System.out.println(customer.toString());
                });
            }
        };
    }
}

