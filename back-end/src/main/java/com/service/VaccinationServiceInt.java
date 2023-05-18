package com.service;

import com.domain.Vaccination;

public interface VaccinationServiceInt {
    public Vaccination addVaccine(Vaccination vaccine, int petId);

    public Vaccination findVaccine(int vacId);
    public Vaccination deleteVaccine(int vacId);
}
