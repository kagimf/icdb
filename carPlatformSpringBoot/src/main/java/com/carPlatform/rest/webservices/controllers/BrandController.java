package com.carPlatform.rest.webservices.controllers;

import java.net.URI;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.carPlatform.rest.webservices.exceptions.BrandNotFoundException;
import com.carPlatform.rest.webservices.exceptions.CompanyNotFoundException;
import com.carPlatform.rest.webservices.exceptions.ModelNotFoundException;
import com.carPlatform.rest.webservices.exceptions.ModificationNotFoundException;
import com.carPlatform.rest.webservices.exceptions.PredecessorSuccessorNotFoundException;
import com.carPlatform.rest.webservices.repositories.BrandRepository;
import com.carPlatform.rest.webservices.repositories.CompanyRepository;
import com.carPlatform.rest.webservices.repositories.ModelRepository;
import com.carPlatform.rest.webservices.repositories.ModificationRepository;
import com.carPlatform.rest.webservices.repositories.PredecessorSuccessorRepository;
import com.carPlatform.rest.webservices.web.Brand;
import com.carPlatform.rest.webservices.web.Company;
import com.carPlatform.rest.webservices.web.Model;
import com.carPlatform.rest.webservices.web.Modification;
import com.carPlatform.rest.webservices.web.PredecessorSuccessor;



@RestController
@CrossOrigin(origins = "*")
public class BrandController {
	
	@Autowired
	private CompanyRepository companyRepository;
	
	@Autowired
	private BrandRepository brandRepository;
	
	@Autowired
	private ModelRepository modelRepository;
	
	@Autowired
	private ModificationRepository modificationRepository;
	
	@Autowired
	private PredecessorSuccessorRepository predecessorSuccessorRepository;
	
	@GetMapping("/predecessors/{id}")
	public List<PredecessorSuccessor> retrieveAllPredecessorsOfSuccessor(@PathVariable int id) {
		return predecessorSuccessorRepository.findBySuccessorId(id);
	}
	
	@GetMapping("/successors/{id}")
	public List<PredecessorSuccessor> retrieveAllSuccessorssOfPredecessor(@PathVariable int id) {
		return predecessorSuccessorRepository.findByPredecessorId(id);
	}
	
	@PostMapping("/predecessor-successor")
	public ResponseEntity<Object> createPredecessorSuccessor(@RequestBody PredecessorSuccessor predecessorSuccessor) {
		PredecessorSuccessor savedPredecessorSuccessor = predecessorSuccessorRepository.save(predecessorSuccessor);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedPredecessorSuccessor.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping("/predecessor-successor/{id}")
	public ResponseEntity<PredecessorSuccessor> updatePredecessorSuccessor(@PathVariable int id,
			@Valid @RequestBody PredecessorSuccessor predecessorSuccessorDetails) throws PredecessorSuccessorNotFoundException {
		PredecessorSuccessor predecessorSuccessor = predecessorSuccessorRepository.findById(id)
				.orElseThrow(() -> new PredecessorSuccessorNotFoundException("Predecessor-Successor not found for this id : " + id));
		predecessorSuccessor.setPredecessorId(predecessorSuccessorDetails.getPredecessorId());
		predecessorSuccessor.setSuccessorId(predecessorSuccessorDetails.getSuccessorId());
		final PredecessorSuccessor updatedPredecessorSuccessor = predecessorSuccessorRepository.save(predecessorSuccessor);
		return ResponseEntity.ok(updatedPredecessorSuccessor);
	}
	
	@GetMapping("/companies")
	public List<Company> retrieveAllCompanies() {
		return companyRepository.findByOrderByCompanyNameAsc();
	}

	@GetMapping("/companies/{id}") 
	public Company retrieveCompany(@PathVariable int id) {
		Optional<Company> company = companyRepository.findById(id);
		if (!company.isPresent()) {
			throw new CompanyNotFoundException("id-" + id);
		}
		return company.get();
	}
	
	@PostMapping("/companies")
	public ResponseEntity<Object> createCompany(@RequestBody Company company) {
		Company savedCompany = companyRepository.save(company);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedCompany.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping("/companies/{id}")
	public ResponseEntity<Company> updateCompany(@PathVariable int id,
			@Valid @RequestBody Company companyDetails) throws CompanyNotFoundException {
		Company company = companyRepository.findById(id)
				.orElseThrow(() -> new CompanyNotFoundException("Company not found for this id : " + id));
		company.setCompanyName(companyDetails.getCompanyName());
		company.setCountry(companyDetails.getCountry());
		final Company updatedCompany = companyRepository.save(company);
		return ResponseEntity.ok(updatedCompany);
	}
	
	@DeleteMapping("/companies/{id}")
	public void deleteCompany(@PathVariable int id) {
		companyRepository.deleteById(id);
	}
	
	@GetMapping("/companies/{id}/brands")
	public List<Brand> retrieveAllBrandsOfCompany(@PathVariable int id) {
		Optional<Company> companyOptional = companyRepository.findById(id);
		if(!companyOptional.isPresent()) {
			throw new CompanyNotFoundException("id-" + id);
		}
		List<Brand> brands = companyOptional.get().getBrands();
		Collections.sort(brands);
		return brands;
	}

	@GetMapping("/brands")
	public List<Brand> retrieveAllBrands() {
		return brandRepository.findByOrderByBrandNameAsc();
	}

	@GetMapping("/brands/{id}") 
	public Brand retrieveBrand(@PathVariable int id) {
		Optional<Brand> brand = brandRepository.findById(id);
		if (!brand.isPresent()) {
			throw new BrandNotFoundException("id-" + id);
		}
		return brand.get();
	}

	@PostMapping("/companies/{id}/brands")
	public ResponseEntity<Object> createBrand(@PathVariable int id, @RequestBody Brand brand) {
		Optional<Company> companyOptional = companyRepository.findById(id);
		if(!companyOptional.isPresent()) {
			throw new CompanyNotFoundException("id-" + id);
		}
		Company company = companyOptional.get();
		brand.setCompany(company);		
		brandRepository.save(brand);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(brand.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping("/companies/{companyId}/brands/{id}")
	public ResponseEntity<Brand> updateBrand(@PathVariable int id, @PathVariable int companyId,
			@Valid @RequestBody Brand brandDetails) throws BrandNotFoundException {
		Brand brand = brandRepository.findById(id)
				.orElseThrow(() -> new BrandNotFoundException("Brand not found for this id : " + id));
		Optional<Company> companyOptional = companyRepository.findById(companyId);
		if(!companyOptional.isPresent()) {
			throw new CompanyNotFoundException("id-" + id);
		}
		Company company = companyOptional.get();
		brand.setBrandName(brandDetails.getBrandName());
		brand.setCountry(brandDetails.getCountry());
		brand.setCompany(company);
		final Brand updatedBrand = brandRepository.save(brand);
		return ResponseEntity.ok(updatedBrand);
	}
	
	@DeleteMapping("/brands/{id}")
	public void deleteBrand(@PathVariable int id) {
		brandRepository.deleteById(id);
	}
	
	@GetMapping("/brands/{id}/models")
	public List<Model> retrieveAllModelsOfBrand(@PathVariable int id) {
		Optional<Brand> brandOptional = brandRepository.findById(id);
		if(!brandOptional.isPresent()) {
			throw new BrandNotFoundException("id-" + id);
		}
		List<Model> models = brandOptional.get().getModels();
		Collections.sort(models);
		return models;
	}
	
	@GetMapping("/models/{id}")
	public Model retrieveModel(@PathVariable int id) {
		Optional<Model> model = modelRepository.findById(id);
		if (!model.isPresent()) {
			throw new ModelNotFoundException("id-" + id);
		}
		return model.get();
	}
	
	@GetMapping("/models")
	public List<Model> retrieveAllModels(){
		List<Model> models = modelRepository.findAll();
		Collections.sort(models);
		return models;
	}
	
	@PostMapping("/brands/{id}/models")
	public ResponseEntity<Object> createModel(@PathVariable int id, @RequestBody Model model) {
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
	
	@PutMapping("/brands/{brandId}/models/{id}")
	public ResponseEntity<Model> updateModel(@PathVariable int id, @PathVariable int brandId,
			@Valid @RequestBody Model modelDetails) throws ModelNotFoundException {
		Model model = modelRepository.findById(id)
				.orElseThrow(() -> new ModelNotFoundException("Model not found for this id : " + id));
		Optional<Brand> brandOptional = brandRepository.findById(brandId);
		if(!brandOptional.isPresent()) {
			throw new BrandNotFoundException("id-" + id);
		}
		Brand brand = brandOptional.get();
		model.setModelName(modelDetails.getModelName());
		model.setGeneration(modelDetails.getGeneration());
		model.setCodeName(modelDetails.getCodeName());
		model.setIsFacelifted(modelDetails.getIsFacelifted());
		model.setProductionStartDate(modelDetails.getProductionStartDate());
		model.setProductionEndDate(modelDetails.getProductionEndDate());
		model.setSegment(modelDetails.getSegment());
		model.setBrand(brand);
		final Model updatedModel = modelRepository.save(model);
		return ResponseEntity.ok(updatedModel);
	}
	
	@DeleteMapping("/models/{id}")
	public void deleteModel(@PathVariable int id) {
		modelRepository.deleteById(id);
	}
	
	@GetMapping("/models/{id}/modifications")
	public List<Modification> retrieveAllModificationsOfModel(@PathVariable int id) {
		Optional<Model> modelOptional = modelRepository.findById(id);
		if(!modelOptional.isPresent()) {
			throw new ModelNotFoundException("id-" + id);
		}
		List<Modification> modifications = modelOptional.get().getModifications();
		Collections.sort(modifications);
		return modifications;
	}
	
	@GetMapping("/modifications/{id}")
	public Modification retrieveModification(@PathVariable int id) {
		Optional<Modification> modification = modificationRepository.findById(id);
		if (!modification.isPresent()) {
			throw new ModelNotFoundException("id-" + id);
		}
		return modification.get();
	}
	
	@GetMapping("/modifications")
	public List<Modification> retrieveAllModifications(){
		return modificationRepository.findAll();
	}
	
	@PostMapping("/models/{id}/modifications")
	public ResponseEntity<Object> createModification(@PathVariable int id, @RequestBody Modification modification) {
		Optional<Model> modelOptional = modelRepository.findById(id);
		if(!modelOptional.isPresent()) {
			throw new ModelNotFoundException("id-" + id);
		}
		Model model = modelOptional.get();
		modification.setModel(model);		
		modificationRepository.save(modification);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(modification.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping("/models/{modelId}/modifications/{id}")
	public ResponseEntity<Modification> updateModification(@PathVariable int id, @PathVariable int modelId,
			@Valid @RequestBody Modification modificationDetails) throws ModificationNotFoundException {
		Modification modification = modificationRepository.findById(id)
				.orElseThrow(() -> new ModificationNotFoundException("Modification not found for this id :: " + id));
		Optional<Model> modelOptional = modelRepository.findById(modelId);
		if(!modelOptional.isPresent()) {
			throw new ModelNotFoundException("id-" + id);
		}
		Model model = modelOptional.get();
		modification.setModificationName(modificationDetails.getModificationName());
		modification.setProductionStartDate(modificationDetails.getProductionStartDate());
		modification.setProductionEndDate(modificationDetails.getProductionEndDate());
		modification.setFuelType(modificationDetails.getFuelType());
		modification.setEngineCode(modificationDetails.getEngineCode());
		modification.setCylinderPosition(modificationDetails.getCylinderPosition());
		modification.setCylinderCount(modificationDetails.getCylinderCount());
		modification.setCylinderDisplacement(modificationDetails.getCylinderDisplacement());
		modification.setPower(modificationDetails.getPower());
		modification.setTorque(modificationDetails.getTorque());
		modification.setMaxSpeed(modificationDetails.getMaxSpeed());
		modification.setAcceleration0to100(modificationDetails.getAcceleration0to100());
		modification.setTransmissionType(modificationDetails.getTransmissionType());
		modification.setTransmission(modificationDetails.getTransmission());
		modification.setGearCount(modificationDetails.getGearCount());
		modification.setDriveWheel(modificationDetails.getDriveWheel());
		modification.setTurbine(modificationDetails.getTurbine());
		modification.setEngineLocation(modificationDetails.getEngineLocation());
		modification.setEnginePosition(modificationDetails.getEnginePosition());
		modification.setFuelConsumptionUrban(modificationDetails.getFuelConsumptionUrban());
		modification.setFuelConsumptionExtraUrban(modificationDetails.getFuelConsumptionExtraUrban());
		modification.setFuelConsumptionCombined(modificationDetails.getFuelConsumptionCombined());
		modification.setLength(modificationDetails.getLength());
		modification.setWeight(modificationDetails.getWeight());
		modification.setBodyType(modificationDetails.getBodyType());
		modification.setDoorCount(modificationDetails.getDoorCount());
		modification.setSeatCount(modificationDetails.getSeatCount());
		modification.setRange(modificationDetails.getRange());
		modification.setCarClass(modificationDetails.getCarClass());
		modification.setModel(model);
		final Modification updatedModification = modificationRepository.save(modification);
		return ResponseEntity.ok(updatedModification);
	}
	
	@DeleteMapping("/modifications/{id}")
	public void deleteModification(@PathVariable int id) {
		modificationRepository.deleteById(id);
	}
	
	
	
}
