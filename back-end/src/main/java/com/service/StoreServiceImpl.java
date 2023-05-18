package com.service;

import com.domain.Store;
import com.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreServiceImpl implements StoreServiceInt {

    private final StoreRepository mStoreRepository;

    @Autowired
    public StoreServiceImpl(StoreRepository storeRepository) {
        this.mStoreRepository = storeRepository;
    }

    @Override
    public Store saveStore(Store store) {
        return mStoreRepository.save(store);
    }

    @Override
    public List<Store> findStoreByZip(int zip) {
        return mStoreRepository.findStoreByZip(zip);
    }

}

