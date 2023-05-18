package com.controller;

import com.domain.Vaccination;
import com.service.VaccinationServiceInt;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")


        public class VaccineController {

    private final VaccinationServiceInt mVaccinationService;


    public VaccineController(VaccinationServiceInt vaccinationService) {
        mVaccinationService = vaccinationService;
    }

    @PostMapping(value = "/addVac/{petId}")
    public Vaccination addVaccine(@RequestBody Vaccination vaccination, @PathVariable int petId){
        return mVaccinationService.addVaccine(vaccination, petId);
    }

    @GetMapping(value="/findVac/{vacId}")
    public Vaccination findVac(@PathVariable int vacId){
        return mVaccinationService.findVaccine(vacId);
    }

    @PutMapping(value="/updateVac/{petId}/{vacId}")
    public Vaccination updateVaccine(@RequestBody Vaccination vaccineObj, @PathVariable int petId, @PathVariable int vacId ){
        Vaccination vaccination = mVaccinationService.findVaccine(vacId);
        vaccination.setVacId(vaccination.getVacId());
        vaccination.setExpiredDate(vaccineObj.getExpiredDate());
        vaccination.setVacName(vaccineObj.getVacName());
        vaccination.setVacNumber(vaccineObj.getVacNumber());
        return mVaccinationService.addVaccine(vaccination, petId);
    }

    @DeleteMapping(value="/deleteVac/{vacId}")
    public Vaccination deleteVac(@PathVariable int vacId){
        return mVaccinationService.deleteVaccine(vacId);
    }

}
