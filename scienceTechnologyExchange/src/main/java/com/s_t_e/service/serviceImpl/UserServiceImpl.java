package com.s_t_e.service.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.s_t_e.domain.User;
import com.s_t_e.repository.UserMapper;
import com.s_t_e.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserMapper userMapper;
	
	@Override
	public int vertifyUserLogin(String account, String password) {
		// TODO Auto-generated method stub
		User user = userMapper.getUserInfoByAccount(account);
		if(user != null && password.equals(user.getPassword())) {
			return 1;
		}else {
			return 0;
		}
	}

}
