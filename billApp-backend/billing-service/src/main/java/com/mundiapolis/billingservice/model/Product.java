package com.mundiapolis.billingservice.model;

import lombok.Data;

@Data
public class Product {
    private Long id;
    private String name;
    private float price;
    private int quantity;
}
