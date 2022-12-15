package com.mundiapolis.inventoryservice.product;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@Configuration
public class ProductConfig {
    private final ProductRepository productRepository;
    private final RepositoryRestConfiguration configuration ;

    public ProductConfig(ProductRepository productRepository, RepositoryRestConfiguration configuration) {
        this.productRepository = productRepository;
        this.configuration = configuration;
    }

    @Bean
    CommandLineRunner init_products(){
        return args -> {
            configuration.exposeIdsFor(Product.class);
            productRepository.save(new Product(null,"IphoneXX",15000, 10));
            productRepository.save(new Product(null,"note 12",13000, 100));
            productRepository.save(new Product(null,"TV Sumsung",5000,200));
            productRepository.save(new Product(null,"Iwatch",5000,100));
            productRepository.save(new Product(null,"galaxy watch",3000, 10));
            productRepository.findAll().forEach(product -> {
                System.out.println(product.toString());
            });
        };
    }
}
