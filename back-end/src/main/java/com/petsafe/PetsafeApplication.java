package com.petsafe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = { "com.domain" })
@EnableJpaRepositories({ "com.repository" })
@ComponentScan(basePackages = { "com" })
public class PetsafeApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetsafeApplication.class, args);
	}

}
