//package com.service;//package com.service.serviceImpl;
//
//import com.domain.Pet;
//import com.domain.User;
//import com.repository.PetRepository;
//import com.repository.UserRepository;
//import com.service.UserServiceInt;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class UserServiceImpl implements UserServiceInt {
//    private final UserRepository mUserRepository;
//
//    private final PetRepository mPetRepository;
//
//
//    @Autowired
//    public UserServiceImpl(UserRepository userRepository, PetRepository petRepository){
//        mUserRepository = userRepository;
//        mPetRepository = petRepository;
//    }
//
//    public User saveUser(User user) {
//        List<Pet> petList = user.getPetList();
//        mPetRepository.saveAll(petList);
//        return mUserRepository.save(user);
//    }
//
//    public User getUser(int userId){
//        return mUserRepository.findByUserId(userId);
//    }
//
//    @Override
//    public User findByUserName(String userName) {
//        return null;
//    }
//}
package com.service;

import com.domain.Pet;
import com.domain.User;
import com.repository.PetRepository;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserServiceInt {

    private final UserRepository userRepository;

    private final PetRepository petRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, PetRepository petRepository) {
        this.userRepository = userRepository;
        this.petRepository = petRepository;
    }

    public User saveUser(User user) {
        List<Pet> petList = user.getPetList();
        petList.forEach(pet -> pet.setUser(user));
        petRepository.saveAll(petList);
        return userRepository.save(user);
    }

    public User getUser(int userId) {
        return userRepository.findByUserId(userId);
    }

    @Override
    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    @Override
    public User getUserByUserEmail(String userEmail) {
        return userRepository.getUserByUserEmail(userEmail);
    }


    @Override
    public boolean existsByUserEmail(String email) {
        return userRepository.existsByUserEmail(email);
    }

//    @Override
//    public User updateUserInfo(User userObj) {
//        User user = new User();
//        user.set
//    }
}
