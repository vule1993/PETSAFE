package com.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="shelter")
public class Shelter {
    @Id
    @GeneratedValue
    private int shelterId;
    private String shelterName;
    private String shelterAddr;
    private int shelterZip;
    private String shelterCity;
}
