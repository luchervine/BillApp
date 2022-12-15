package com.mundiapolis.billingservice.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mundiapolis.billingservice.model.Product;
import lombok.Data;

import javax.persistence.*;

@Entity @Data
public class ProductItem {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int quantity;
    private float price;
    private long product_id;
    @Transient
    private String product_name;
    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Bill bill;
    @Transient
    private Product product;

}
