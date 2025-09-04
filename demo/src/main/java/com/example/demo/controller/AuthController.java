package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User loginUser) {
        try {
            User user = userService.findByEmail(loginUser.getEmail());
            if (user == null) {
                // Automatically create user if not exists
                userService.save(loginUser);
                return ResponseEntity.ok("User created and logged in successfully");
            } else if (user.getPassword().equals(loginUser.getPassword())) {
                return ResponseEntity.ok("Login successful");
            } else {
                return ResponseEntity.badRequest().body("Invalid credentials");
            }
        } catch (Exception e) {
            logger.error("Login error", e);
            return ResponseEntity.status(500).body("Internal server error: " + e.getMessage());
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User newUser) {
        try {
            User existing = userService.findByEmail(newUser.getEmail());
            if (existing != null) {
                return ResponseEntity.badRequest().body("User already exists");
            }
            userService.save(newUser);
            return ResponseEntity.ok("Registration successful");
        } catch (Exception e) {
            logger.error("Registration error", e);
            return ResponseEntity.status(500).body("Internal server error: " + e.getMessage());
        }
    }
}
