package com.controller;

import com.domain.Pet;
import com.domain.User;
import com.service.PetServiceInt;
import com.service.UserServiceInt;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    private final UserServiceInt mUserService;
    private final PetServiceInt mPetService;

    @Autowired
    public UserController(UserServiceInt userServiceInt, PetServiceInt petService){

        mUserService = userServiceInt;
        mPetService = petService;
    }

    @PostMapping (value="/saveUser")
    public ResponseEntity<User> saveUser(@RequestBody User user){
        String email = user.getUserEmail();

        if (mUserService.existsByUserEmail(email)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
        String password = user.getUserPassword();
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(password);
        user.setUserPassword(hashedPassword);

        User savedUser = mUserService.saveUser(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

    @GetMapping(value="/getUser/{userId}")
    public User getUser(@PathVariable int userId){
        return mUserService.getUser(userId);
    }

    @GetMapping("/users/{email}/{password}")
    public ResponseEntity<User> getUserByEmailAndPassword(@PathVariable String email, @PathVariable String password) {
        User user = mUserService.getUserByUserEmail(email);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if (!passwordEncoder.matches(password, user.getUserPassword())) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @PutMapping(value="/updateUser/{userId}")
    public User updateUserInfo(@RequestBody User userObj, @PathVariable int userId){
        User user = mUserService.getUser(userId);
        user.setUserPassword(user.getUserPassword());
        user.setUserName(userObj.getUserName());
        user.setUserDOB(userObj.getUserDOB());
        user.setUserEmail(userObj.getUserEmail());
        user.setUserAddress(userObj.getUserAddress());
        user.setUserPhone(userObj.getUserPhone());
        for (Pet pet : userObj.getPetList()){
            mPetService.savePet(pet, userObj.getUserId());
        }
        return mUserService.saveUser(user);
    }
}
