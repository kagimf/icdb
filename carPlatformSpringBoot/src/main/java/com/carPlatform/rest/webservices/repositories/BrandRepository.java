package com.carPlatform.rest.webservices.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carPlatform.rest.webservices.web.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Integer>{
	
	List<Brand> findByOrderByBrandNameAsc();

}
