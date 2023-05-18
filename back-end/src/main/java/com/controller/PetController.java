package com.controller;

import com.domain.Pet;
import com.domain.Vaccination;
import com.service.PetServiceInt;
import com.service.VaccinationServiceInt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.acls.model.NotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")

public class PetController {
    private final PetServiceInt mPetService;
    private final VaccinationServiceInt mVaccinationService;

    @Autowired
    public PetController(PetServiceInt petService, VaccinationServiceInt vaccinationService){
        mPetService = petService;
        mVaccinationService = vaccinationService;
    }

    @PostMapping(value="/savePet/{userId}")
    public Pet savePet(@RequestBody Pet pet, @PathVariable int userId){
        return mPetService.savePet(pet, userId);
    }

    @GetMapping(value="/findPetByUserId/{userId}")
    public List<Pet> findPetByUserId(@PathVariable int userId){
        return mPetService.findPetByUserId(userId);
    }

    @GetMapping(value ="/findByPetId/{petId}")
    public Pet findByPetId(@PathVariable int petId){
        return mPetService.findByPetId(petId);
    }

    @PutMapping(value="/updatePet/{petId}")
    public Pet updatePet(@RequestBody Pet updatedPet, @PathVariable int petId){
        Pet pet = mPetService.findByPetId(petId);
        if (pet != null) {
            // set the updated pet's attributes on the original pet object
            pet.setPetName(updatedPet.getPetName());
            pet.setPetImage(updatedPet.getPetImage());
            pet.setPetAge(updatedPet.getPetAge());
            pet.setPetType(updatedPet.getPetType());
            pet.setPetBreed(updatedPet.getPetBreed());
            pet.setPetWeight(updatedPet.getPetWeight());
            // save the updated pet to the repository
            for(Vaccination vac : updatedPet.getListVaccination()){
                mVaccinationService.addVaccine(vac, updatedPet.getPetId());
            }
            return mPetService.savePet(pet, pet.getUser().getUserId());
        } else {
            throw new NotFoundException("Pet not found with id " + petId);
        }
    }
    @DeleteMapping(value = "/deletePet/{petId}")
    public Pet deletePet(@PathVariable int petId) {
        return mPetService.deletePet(petId);
    }
}
