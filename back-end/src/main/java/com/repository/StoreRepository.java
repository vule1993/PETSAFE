package com.repository;

import com.domain.Shelter;
import com.domain.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoreRepository extends JpaRepository<Store, Integer> {
    Store findByStoreId(int storeId);

    @Query(value="SELECT * FROM store WHERE store_zip=:storeZip", nativeQuery = true)
    public List<Store> findStoreByZip(int storeZip);
}
