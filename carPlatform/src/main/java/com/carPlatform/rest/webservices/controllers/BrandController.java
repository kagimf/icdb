package com.carPlatform.rest.webservices.controllers;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.carPlatform.rest.webservices.exceptions.BrandNotFoundException;
import com.carPlatform.rest.webservices.repositories.BrandRepository;
import com.carPlatform.rest.webservices.repositories.ModelRepository;
import com.carPlatform.rest.webservices.web.Brand;
import com.carPlatform.rest.webservices.web.Model;


@RestController
public class BrandController {
	
	@Autowired
	private BrandRepository brandRepository;
	
	@Autowired
	private ModelRepository modelRepository;

	@GetMapping("/brands")
	public List<Brand> retrieveAllBrands() {
		return brandRepository.findAll();
	}

	@GetMapping("/brands/{id}")
	public Brand retrieveBrand(@PathVariable int id) {
		Optional<Brand> brand = brandRepository.findById(id);
		if (!brand.isPresent()) {
			throw new BrandNotFoundException("id-" + id);
		}
		return brand.get();
	}

	@PostMapping("/brands")
	public ResponseEntity<Object> createBrand(@RequestBody Brand brand) {
		Brand savedBrand = brandRepository.save(brand);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedBrand.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}

	@DeleteMapping("brands/{id}")
	public void deleteBrand(@PathVariable int id) {
		brandRepository.deleteById(id);
	}
	
	@GetMapping("brands/{id}/models")
	public List<Model> retrieveAllModelsOfBrand(@PathVariable int id) {
		Optional<Brand> brandOptional = brandRepository.findById(id);
		if(!brandOptional.isPresent()) {
			throw new BrandNotFoundException("id-" + id);
		}
		return brandOptional.get().getModels();
	}
	@GetMapping("/brands/models")
	public List<Model> retrieveAllModels(){
		return modelRepository.findAll();
	}
	
	@PostMapping("brands/{id}/models")
	public ResponseEntity<Object> createPost(@PathVariable int id, @RequestBody Model model) {
		Optional<Brand> brandOptional = brandRepository.findById(id);
		if(!brandOptional.isPresent()) {
			throw new BrandNotFoundException("id-" + id);
		}
		Brand brand = brandOptional.get();
		model.setBrand(brand);		
		modelRepository.save(model);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(model.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
}
