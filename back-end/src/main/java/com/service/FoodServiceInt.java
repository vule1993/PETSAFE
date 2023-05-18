package com.service;

import com.domain.Food;


import java.util.List;

public interface FoodServiceInt {
    public Food saveFood(Food food);

    public List<Food> searchFoodByText(String petType, String text);

    public List<Food> findFoodForPet(String petType, String petAge, String petSize);






}
