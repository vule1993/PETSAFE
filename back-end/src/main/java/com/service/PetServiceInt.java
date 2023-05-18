package com.service;

import com.domain.Pet;

import java.util.List;

public interface PetServiceInt {
    public Pet savePet(Pet pet, int userId);
    public List<Pet> findPetByUserId(int userId);

    public Pet deletePet(int petId);

    public Pet findByPetId(int petId);

}
