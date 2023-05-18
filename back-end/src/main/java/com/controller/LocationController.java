package com.controller;

import com.service.ShelterServiceInt;
import com.service.StoreServiceInt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")

public class LocationController {
    private final ShelterServiceInt mShelterService;
    private final StoreServiceInt mStoreService;

    @Autowired
    public LocationController (ShelterServiceInt shelterService, StoreServiceInt storeService){
        mShelterService = shelterService;
        mStoreService = storeService;
    }

    @GetMapping(value="/searchLocation/{option}/{zip}")
    public List<?> searchLocation(@PathVariable String option, @PathVariable int zip){
        if (option.contains("shelter")) {
            return mShelterService.findShelterByZip(zip);
        }
            return mStoreService.findStoreByZip(zip);
    }
}
