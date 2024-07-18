package com.soft.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.soft.model.User;
import com.soft.model.User.UserRole;
import com.soft.services.UserServices;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserServices userServ;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userServ.getAllUsers();
    }

    @PostMapping("/addUser")
    public User createUser(@RequestBody User newUSer) {
        return userServ.createUser(newUSer);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        String email = user.getEmail();
        String password = user.getPassword();
        UserRole role = user.getRole();
        if (userServ.authinc(email, password, role)) {
            return "Login Valid";
        } else {
            return "Login Not Valid";
        }
    }

    @PostMapping("/verify")
    public Map<String, Boolean> verifyUser(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String oldPassword = request.get("oldPassword");

        boolean success = userServ.verifyUser(email, oldPassword);
        Map<String, Boolean> response = new HashMap<>();
        response.put("success", success);
        return response;
    }

    @PostMapping("/update-password")
    public Map<String, Boolean> updatePassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String newPassword = request.get("newPassword");

        boolean success = userServ.updatePassword(email, newPassword);
        Map<String, Boolean> response = new HashMap<>();
        response.put("success", success);
        return response;
    }
}
