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
@Table(name="food")
public class Food {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int foodId;
    private String foodName;
    private String foodBranch;
    private String foodForPetType;
    private String foodForPetSize;
    private String foodForPetAge;
    private String foodDescription;
    private int foodPrice;
    @JsonIgnoreProperties("listFood")
    @ManyToMany
    @JoinTable(
            name = "food_store",
            joinColumns = @JoinColumn(name = "foodId"),
            inverseJoinColumns = @JoinColumn(name = "storeId"))
    List<Store> listStore = new ArrayList<>();
}
