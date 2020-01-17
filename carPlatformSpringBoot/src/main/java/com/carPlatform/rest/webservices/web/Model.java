package com.carPlatform.rest.webservices.web;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.DynamicUpdate;
import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Model implements Comparable<Model> {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String modelName;
	private int generation;
	private String codeName;
	private boolean isFacelifted;
	private int productionStartDate;
	private int productionEndDate;
	private String segment;
	
	@ManyToOne(fetch=FetchType.EAGER)
	private Brand brand;
	
	@OneToMany(mappedBy="model")
	@JsonIgnore
	private List<Modification> modifications;
	
	protected Model() {
		
	}

	public Model(Integer id, String modelName, int generation, String codeName, boolean isFacelifted, 
			int productionStartDate, int productionFinishDate, String segment, Brand brand,
			List<Modification> modifications) {
		super();
		this.id = id;
		this.modelName = modelName;
		this.generation = generation;
		this.codeName = codeName;
		this.isFacelifted = isFacelifted;
		this.productionStartDate = productionStartDate;
		this.productionEndDate = productionFinishDate;
		this.segment = segment;
		this.brand = brand;
		this.modifications = modifications;
	}

	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public int getGeneration() {
		return generation;
	}


	public void setGeneration(int generation) {
		this.generation = generation;
	}


	public String getCodeName() {
		return codeName;
	}


	public void setCodeName(String codeName) {
		this.codeName = codeName;
	}
	
	public boolean getIsFacelifted() {
		return isFacelifted;
	}

	public void setIsFacelifted(boolean isFacelifted) {
		this.isFacelifted = isFacelifted;
	}

	public int getProductionStartDate() {
		return productionStartDate;
	}


	public void setProductionStartDate(int productionStartDate) {
		this.productionStartDate = productionStartDate;
	}


	public int getProductionEndDate() {
		return productionEndDate;
	}


	public void setProductionEndDate(int productionEndDate) {
		this.productionEndDate = productionEndDate;
	}


	public String getSegment() {
		return segment;
	}


	public void setSegment(String segment) {
		this.segment = segment;
	}


	public Brand getBrand() {
		return brand;
	}


	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}
	
	public List<Modification> getModifications() {
		return modifications;
	}

	public void setModifications(List<Modification> modifications) {
		this.modifications = modifications;
	}

	@Override
	public String toString() {
		return "Model [id=" + id + ", modelName=" + modelName + ", generation=" + generation + ", codeName=" + codeName
				+ ", isFacelifted=" + isFacelifted + ", productionStartDate=" + productionStartDate
				+ ", productionEndDate=" + productionEndDate + ", segment=" + segment + "]";
	}
	
	@Override
	public int compareTo(Model m) {
		
		return this.getModelName().compareTo(m.getModelName());
		
	}

}