package com.repository;

import com.domain.Shelter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ShelterRepository extends JpaRepository<Shelter, Integer> {
    @Query(value="SELECT * FROM shelter WHERE shelter_zip=:shelterZip", nativeQuery = true)
    public List<Shelter> findShelterByZip(int shelterZip);
}
