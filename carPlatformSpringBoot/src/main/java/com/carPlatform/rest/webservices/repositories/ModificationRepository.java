package com.carPlatform.rest.webservices.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.carPlatform.rest.webservices.web.Model;
import com.carPlatform.rest.webservices.web.Modification;

@Repository
public interface ModificationRepository extends JpaRepository<Modification, Integer> {
	
}
