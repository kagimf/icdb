package com.carPlatform.rest.webservices.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.carPlatform.rest.webservices.web.Model;

@Repository
public interface ModelRepository extends JpaRepository<Model, Integer> {
	
}
