package com.service;

import com.domain.Food;
import com.domain.Store;
import com.repository.FoodRepository;
import com.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FoodServiceImpl implements FoodServiceInt {

    private final FoodRepository mFoodRepository;
    private final StoreRepository mStoreRepository;

    @Autowired
    public FoodServiceImpl(FoodRepository foodRepository, StoreRepository storeRepository ) {
        this.mFoodRepository = foodRepository;
        this.mStoreRepository = storeRepository;
    }

    @Override
    public Food saveFood(Food food) {
        List<Store> listStore = new ArrayList<>();
        listStore = food.getListStore();
        mStoreRepository.saveAll(listStore);
        return mFoodRepository.save(food);
    }


    @Override
    public List<Food> searchFoodByText(String petType, String text) {
        List<Food> foodList = mFoodRepository.findFoodForPetType(petType);
        List<Food> filteredList = new ArrayList<>();
            for (Food food : foodList) {
                if (food.getFoodName().contains(text) || food.getFoodBranch().contains(text)
                        ||food.getFoodForPetAge().contains(text)||food.getFoodForPetSize().contains(text)) {
                    filteredList.add(food);
                }
            }
        return filteredList;
    }

    @Override
    public List<Food> findFoodForPet(String petType, String petAge, String petSize) {
        return mFoodRepository.findFoodForPet(petType, petAge, petSize);
    }

}
