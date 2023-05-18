package com.repository;

import com.domain.Vaccination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VaccinationRepository extends JpaRepository<Vaccination, Integer> {
    public Vaccination findByVacId(int vacId);
}
