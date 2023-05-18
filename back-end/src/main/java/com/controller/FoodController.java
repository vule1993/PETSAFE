package com.controller;

import com.domain.Food;
import com.domain.Store;
import com.service.FoodServiceInt;
import com.service.StoreServiceInt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class FoodController {
    private final FoodServiceInt mFoodService;
    private final StoreServiceInt mStoreService;

    @Autowired
    public FoodController(FoodServiceInt foodService, StoreServiceInt storeService) {
        this.mFoodService = foodService;
        this.mStoreService = storeService;
    }

    @PostMapping(value = "/saveFood")
    public Food saveFood(@RequestBody Food food) {
       return mFoodService.saveFood(food);
    }

    @GetMapping(value ="/findFood/{petType}/{text}")
    public List<Food> findFood(@PathVariable String petType, @PathVariable String text){
        return mFoodService.searchFoodByText(petType, text);
    }

    @GetMapping(value="/findFoodForPet/{petType}/{petAge}/{petWeight}")
    public List<Food> findFoodForPet(@PathVariable String petType, @PathVariable String petAge, @PathVariable int petWeight){
        String petSize;
        if(petType == "Dog"){
        if(petWeight <= 10){
            petSize = "small";
        } else if (10 < petWeight && petWeight < 30) {
            petSize ="medium";
        }else{
            petSize = "large";
        }
        } else if (petType == "Cat") {
            if(petWeight <= 5){
                petSize = "small";
            } else if (5 < petWeight && petWeight < 10) {
                petSize ="medium";
            }else{
                petSize = "large";
            }
        }else{
            if(petWeight <= 3){
                petSize = "small";
            } else if (3 < petWeight && petWeight < 6) {
                petSize ="medium";
            }else{
                petSize = "large";
            }
        }
        return mFoodService.findFoodForPet(petType, petAge, petSize);
    }



}
