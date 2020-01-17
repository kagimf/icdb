package com.carPlatform.rest.webservices.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carPlatform.rest.webservices.web.PredecessorSuccessor;

@Repository
public interface PredecessorSuccessorRepository extends JpaRepository<PredecessorSuccessor, Integer>{
	
	List<PredecessorSuccessor> findByPredecessorId(int predecessorId);
	
	List<PredecessorSuccessor> findBySuccessorId(int successorId);

}
