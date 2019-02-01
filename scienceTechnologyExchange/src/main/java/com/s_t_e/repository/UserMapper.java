package com.s_t_e.repository;

import com.s_t_e.domain.User;

public interface UserMapper {

	User getUserInfoByAccount(String account);

}
