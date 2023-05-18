package com.service;

import com.domain.Shelter;
import com.repository.ShelterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShelterServiceImpl implements ShelterServiceInt{

    private final ShelterRepository mShelterRepository;

    @Autowired
    public ShelterServiceImpl(ShelterRepository shelterRepository){
        mShelterRepository = shelterRepository;
    }
    @Override
    public List<Shelter> findShelterByZip(int zip) {
        return mShelterRepository.findShelterByZip(zip);
    }
}
