package com.carPlatform.rest.webservices.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carPlatform.rest.webservices.web.Brand;
import com.carPlatform.rest.webservices.web.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer>{
	
	List<Company> findByOrderByCompanyNameAsc();

}
