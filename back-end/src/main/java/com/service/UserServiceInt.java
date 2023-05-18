package com.service;

import com.domain.User;

public interface UserServiceInt {
    public User saveUser(User user);
    public User getUser(int userId);
    public User findByUserName(String userName);

    User getUserByUserEmail(String userEmail);

    boolean existsByUserEmail(String email);

//    public User updateUserInfo(User userObj);
}
