package com.service;

import com.domain.Pet;
import com.domain.User;
import com.domain.Vaccination;
import com.repository.PetRepository;
import com.repository.UserRepository;
import com.repository.VaccinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Service
public class PetServiceImpl implements PetServiceInt {
    private final PetRepository mPetRepository;
    private final UserRepository mUserRepository;
    private final VaccinationRepository mVaccinationRepository;
    @Autowired
    public PetServiceImpl(PetRepository petRepository,UserRepository userRepository, VaccinationRepository vaccinationRepository ){
        mPetRepository = petRepository;
        mUserRepository = userRepository;
        mVaccinationRepository = vaccinationRepository;
    }
    @Override
    public Pet savePet(Pet pet, int userId) {
        User user = mUserRepository.findByUserId(userId);
        System.out.println();
        pet.setUser(user);
        return mPetRepository.save(pet);
    }

    @Override
    public List<Pet> findPetByUserId(int userId) {
        return mPetRepository.findByUserId(userId);
    }

    @Override
    public Pet deletePet(int petId) {
        Pet pet = mPetRepository.findByPetId(petId);
        List<Vaccination> vaccinations = pet.getListVaccination();
        for (Vaccination vaccination : vaccinations) {
            vaccination.setPet(null);
            mVaccinationRepository.delete(vaccination);
        }
        mPetRepository.delete(pet);
        return pet;
    }



    @Override
    public Pet findByPetId(int petId) {
        return mPetRepository.findByPetId(petId);
    }
}
