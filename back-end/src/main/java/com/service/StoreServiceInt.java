package com.service;

import com.domain.Store;

import java.util.List;

public interface StoreServiceInt {
    public Store saveStore(Store store);

    public List<Store> findStoreByZip(int zip);
}
