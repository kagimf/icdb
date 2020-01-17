package com.carPlatform.rest.webservices.web;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Brand implements Comparable<Brand> {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String brandName;
	private String country;
	
	@OneToMany(mappedBy="brand")
	@JsonIgnore
	private List<Model> models;
	
	@ManyToOne(fetch=FetchType.EAGER)
	private Company company;
	
	protected Brand() {
		
	}

	public Brand(Integer id, String brandName, String country, List<Model> models, Company company) {
		super();
		this.id = id;
		this.brandName = brandName;
		this.country = country;
		this.models = models;
		this.company = company;
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

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public List<Model> getModels() {
		return models;
	}

	public void setModels(List<Model> models) {
		this.models = models;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	@Override
	public String toString() {
		return "Brand [id=" + id + ", brandName=" + brandName + ", country=" + country + "]";
	}

	@Override
	public int compareTo(Brand b) {
		return this.getBrandName().compareTo(b.getBrandName());
	}

}
