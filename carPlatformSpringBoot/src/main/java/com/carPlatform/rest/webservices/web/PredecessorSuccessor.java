package com.carPlatform.rest.webservices.web;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PredecessorSuccessor {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private Integer predecessorId;
	private Integer successorId;
	
	protected PredecessorSuccessor() {
		
	}

	public PredecessorSuccessor(Integer id, Integer predecessorId, Integer successorId) {
		super();
		this.id = id;
		this.predecessorId = predecessorId;
		this.successorId = successorId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getPredecessorId() {
		return predecessorId;
	}

	public void setPredecessorId(Integer predecessorId) {
		this.predecessorId = predecessorId;
	}

	public Integer getSuccessorId() {
		return successorId;
	}

	public void setSuccessorId(Integer successorId) {
		this.successorId = successorId;
	}

	@Override
	public String toString() {
		return "predecessorSuccessor [id=" + id + ", predecessorId=" + predecessorId + ", successorId=" + successorId
				+ "]";
	}
	
}
