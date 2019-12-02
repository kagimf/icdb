package com.carPlatform.rest.webservices.web;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Model {

	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private Integer id;
	private String modelName;
	private int generation;
	private String codeName;
	@Column(columnDefinition = "boolean default false")
	private boolean isFacelifted;
	private int productionStartDate;
	private int productionFinishDate;
	private String segment;
	
	@ManyToOne(fetch=FetchType.LAZY)
	private Brand brand;
	
	protected Model() {
		
	}

	public Model(Integer id, String modelName, int generation, String codeName, boolean isFacelifted,
			int productionStartDate, int productionFinishDate, String segment, Brand brand) {
		super();
		this.id = id;
		this.modelName = modelName;
		this.generation = generation;
		this.codeName = codeName;
		this.isFacelifted = isFacelifted;
		this.productionStartDate = productionStartDate;
		this.productionFinishDate = productionFinishDate;
		this.segment = segment;
		this.brand = brand;
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


	public boolean isFacelifted() {
		return isFacelifted;
	}


	public void setFacelifted(boolean isFacelifted) {
		this.isFacelifted = isFacelifted;
	}


	public int getProductionStartDate() {
		return productionStartDate;
	}


	public void setProductionStartDate(int productionStartDate) {
		this.productionStartDate = productionStartDate;
	}


	public int getProductionFinishDate() {
		return productionFinishDate;
	}


	public void setProductionFinishDate(int productionFinishDate) {
		this.productionFinishDate = productionFinishDate;
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

	@Override
	public String toString() {
		return "Model [modelName=" + modelName + ", generation=" + generation + ", codeName=" + codeName
				+ ", isFacelifted=" + isFacelifted + ", productionStartDate=" + productionStartDate
				+ ", productionFinishDate=" + productionFinishDate + ", segment=" + segment + "]";
	}
	
}