package com.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vaccination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vacId;
    private String vacName;
    private String vacNumber;
    private Date expiredDate;
    private String vacRecord;

    @ManyToOne
    @JoinColumn(name="petId", nullable = false)
    @JsonBackReference
    private Pet pet;
}
