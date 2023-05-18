//package com.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.HashSet;
//import java.util.Set;
//
//@Service
//public class UserDetailsServiceImplement implements UserDetailsService {
//    @Autowired
//    UserServiceInt userService;
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//
//        com.domain.User user = userService.findByUserName(username);
//        System.out.println("User Details......." + user);
//        if(user == null) {
//            throw new UsernameNotFoundException(username);
//        }
////        Set<GrantedAuthority> ga = new HashSet<>();
////        Set<Role> roles = user.getRoles();
////        for (Role role : roles) {
////            System.out.println("role.getRoleName()" + role.getRoleName());
////            ga.add(new SimpleGrantedAuthority(role.getRoleName()));
////        }
//        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getUserPassword());
//    }
//}

package com.service;

import com.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImplement implements UserDetailsService {

    @Autowired
    private UserServiceInt userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.findByUserName(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getUserName())
                .password(user.getUserPassword())
                .build();
    }
}
