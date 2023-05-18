package com.service;

import com.domain.Shelter;

import java.util.List;

public interface ShelterServiceInt {
    public List<Shelter> findShelterByZip(int zip);
}
