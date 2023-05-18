package com.repository;

import com.domain.Pet;
import com.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet, Integer> {
    @Query(value = "SELECT * FROM pet WHERE user_id=:userId", nativeQuery = true)
    public List<Pet> findByUserId(int userId);

    @Query(value = "SELECT * FROM pet WHERE pet_Id=:petId", nativeQuery = true)
    public Pet findByPetId(int petId);
}
