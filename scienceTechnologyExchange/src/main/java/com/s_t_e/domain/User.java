package com.s_t_e.domain;

public class User {
	String userId;
	String account;
	String password;
	String nickname;
	Integer levelExp;
	Integer integral;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public Integer getLevelExp() {
		return levelExp;
	}

	public void setLevelExp(Integer levelExp) {
		this.levelExp = levelExp;
	}

	public Integer getIntegral() {
		return integral;
	}

	public void setIntegral(Integer integral) {
		this.integral = integral;
	}

}
