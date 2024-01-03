package net.javaguides.emsback;

import net.javaguides.emsback.mapper.EmployeeMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EmsBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmsBackApplication.class, args);
	}

}
