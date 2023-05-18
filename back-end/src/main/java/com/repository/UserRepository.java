package com.repository;

import com.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
   @Query(value = "SELECT * FROM user WHERE user_Id=:userId", nativeQuery = true)
    public User findByUserId(int userId);

    User findByUserName(String userName);

    User getUserByUserEmail(String userEmail);

    boolean existsByUserEmail(String userEmail);
}
