package com.repository;

import com.domain.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodRepository extends JpaRepository<Food, Integer> {
    @Query(value = "SELECT * FROM food WHERE food_for_pet_type=:petType", nativeQuery = true)
    public List<Food> findFoodForPetType(String petType);

    @Query(value="SELECT * FROM food WHERE food_for_pet_type=:petType AND (food_for_pet_age=:petAge AND food_for_pet_size=:petSize)", nativeQuery = true)
    public List<Food> findFoodForPet(String petType, String petAge, String petSize);
}