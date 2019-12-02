package com.carPlatform.rest.webservices.web;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Brand {
	
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private Integer id;
	private String brandName;
	
	@OneToMany(mappedBy="brand")
	@JsonIgnore
	private List<Model> models;
	
	protected Brand() {
		
	}

	public Brand(Integer id, String brandName) {
		super();
		this.id = id;
		this.brandName = brandName;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	public List<Model> getModels() {
		return models;
	}

	public void setModels(List<Model> models) {
		this.models = models;
	}

	@Override
	public String toString() {
		return "brand [brandName=" + brandName + "]";
	}
}
