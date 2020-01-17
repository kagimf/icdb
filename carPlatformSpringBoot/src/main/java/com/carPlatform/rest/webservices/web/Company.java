package com.carPlatform.rest.webservices.web;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String companyName;
	private String country;
	
	@OneToMany(mappedBy="company")
	@JsonIgnore
	private List<Brand> brands;

	protected Company() {
		
	}
	
	public Company(Integer id, String companyName, String counry, List<Brand> brands) {
		super();
		this.id = id;
		this.companyName = companyName;
		this.country = country;
		this.brands = brands;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public List<Brand> getBrands() {
		return brands;
	}

	public void setBrands(List<Brand> brands) {
		this.brands = brands;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", companyName=" + companyName + ", country=" + country + "]";
	}
	
}
