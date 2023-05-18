package com.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="store")
public class Store {
    @Id
    private int storeId;
    private String storeName;
    private String storeAddr;
    private int storeZip;
    private String storeCity;

    @JsonIgnoreProperties("listStore")
    @ManyToMany(mappedBy="listStore")
    List<Food> listFood = new ArrayList<>();
}
