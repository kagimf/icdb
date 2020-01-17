package com.carPlatform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.carPlatform"})
public class CarPlatformApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarPlatformApplication.class, args);
	}

}
