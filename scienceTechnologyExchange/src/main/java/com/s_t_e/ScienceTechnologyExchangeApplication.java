package com.s_t_e;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication()
@MapperScan("com.s_t_e.repository")
public class ScienceTechnologyExchangeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScienceTechnologyExchangeApplication.class, args);
	}
}
