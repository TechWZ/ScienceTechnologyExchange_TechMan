package com.s_t_e.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.s_t_e.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@CrossOrigin
	@PostMapping("/userLogin")
	public Integer userLogin(@RequestBody Map<String, Object> parameter) {
		String account = parameter.get("account").toString();
		String password = parameter.get("password").toString();
		try {
			return userService.vertifyUserLogin(account,password);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return 0;
		}
		
	}
}
