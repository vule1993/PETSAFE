package com.service;

import com.domain.Pet;
import com.domain.Vaccination;
import com.repository.PetRepository;
import com.repository.VaccinationRepository;
import org.springframework.stereotype.Service;

@Service
public class VaccinationServiceImpl implements VaccinationServiceInt{

    private final VaccinationRepository mVaccinationRepository;
    private final PetRepository mPetRepository;

    public VaccinationServiceImpl(VaccinationRepository vaccinationRepository, PetRepository petRepository){
        mVaccinationRepository = vaccinationRepository;
        mPetRepository = petRepository;
    }

    @Override
    public Vaccination addVaccine(Vaccination vaccine, int petId) {
        Pet pet = mPetRepository.findByPetId(petId);
        vaccine.setPet(pet);
        return mVaccinationRepository.save(vaccine);
    }

    @Override
    public Vaccination findVaccine(int vacId) {
        return mVaccinationRepository.findByVacId(vacId);
    }

    @Override
    public Vaccination deleteVaccine(int vacId) {
        Vaccination vac = mVaccinationRepository.findByVacId(vacId);
        mVaccinationRepository.delete(vac);
        return vac;
    }

}
