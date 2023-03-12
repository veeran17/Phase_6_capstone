package com.cisco.capstone.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cisco.capstone.entity.User;

public interface Userrepo extends JpaRepository<User,Integer>{

}
