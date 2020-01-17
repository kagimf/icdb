package com.carPlatform.rest.webservices.web;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.DynamicUpdate;


@Entity
public class Modification implements Comparable<Modification> {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(columnDefinition = "boolean default false")
	private String modificationName;
	private int productionStartDate;
	private int productionEndDate;
	private String fuelType;
	private String engineCode;
	private String cylinderPosition;
	private int cylinderCount;
	private int cylinderDisplacement;
	private int power;
	private int torque;
	private int maxSpeed;
	private double acceleration0to100;
	private String transmissionType;
	private String transmission;
	private int gearCount;
	private String driveWheel;
	private String turbine;
	private String engineLocation;
	private String enginePosition;
	private double fuelConsumptionUrban;
	private double fuelConsumptionExtraUrban;
	private double fuelConsumptionCombined;
	private int length;
	private int weight;
	private String bodyType;
	private int doorCount;
	private String seatCount;
	private int range;
	private String carClass;
	
	@ManyToOne(fetch=FetchType.EAGER)
	private Model model;
	
	protected Modification() {
		
	}

	public Modification(Integer id, String modificationName, int productionStartDate, int productionEndDate, String fuelType, String engineCode, String cylinderPosition, int cylinderCount,
			int cylinderDisplacement, int power, int torque, int maxSpeed, double acceleration0to100,
			String transmissionType, String transmission, int gearCount, String driveWheel, String turbine,
			String engineLocation, String enginePosition, double fuelConsumptionUrban, double fuelConsumptionExtraUrban,
			double fuelConsumptionCombined, int length, int weight, String bodyType, int doorCount, String seatCount, int range, String carClass,
			Model model) {
		super();
		this.id = id;
		this.modificationName = modificationName;
		this.productionStartDate = productionStartDate;
		this.productionEndDate = productionEndDate;
		this.fuelType = fuelType;
		this.engineCode = engineCode;
		this.cylinderPosition = cylinderPosition;
		this.cylinderCount = cylinderCount;
		this.cylinderDisplacement = cylinderDisplacement;
		this.power = power;
		this.torque = torque;
		this.maxSpeed = maxSpeed;
		this.acceleration0to100 = acceleration0to100;
		this.transmissionType = transmissionType;
		this.transmission = transmission;
		this.gearCount = gearCount;
		this.driveWheel = driveWheel;
		this.turbine = turbine;
		this.engineLocation = engineLocation;
		this.enginePosition = enginePosition;
		this.fuelConsumptionUrban = fuelConsumptionUrban;
		this.fuelConsumptionExtraUrban = fuelConsumptionExtraUrban;
		this.fuelConsumptionCombined = fuelConsumptionCombined;
		this.length = length;
		this.weight = weight;
		this.bodyType = bodyType;
		this.doorCount = doorCount;
		this.seatCount = seatCount;
		this.range = range;
		this.carClass = carClass;
		this.model = model;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getModificationName() {
		return modificationName;
	}

	public void setModificationName(String modificationName) {
		this.modificationName = modificationName;
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
	
	public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}

	public String getEngineCode() {
		return engineCode;
	}

	public void setEngineCode(String engineCode) {
		this.engineCode = engineCode;
	}

	public String getCylinderPosition() {
		return cylinderPosition;
	}

	public void setCylinderPosition(String cylinderPosition) {
		this.cylinderPosition = cylinderPosition;
	}

	public int getCylinderCount() {
		return cylinderCount;
	}

	public void setCylinderCount(int cylinderCount) {
		this.cylinderCount = cylinderCount;
	}

	public int getCylinderDisplacement() {
		return cylinderDisplacement;
	}

	public void setCylinderDisplacement(int cylinderDisplacement) {
		this.cylinderDisplacement = cylinderDisplacement;
	}

	public int getPower() {
		return power;
	}

	public void setPower(int power) {
		this.power = power;
	}

	public int getTorque() {
		return torque;
	}

	public void setTorque(int torque) {
		this.torque = torque;
	}

	public int getMaxSpeed() {
		return maxSpeed;
	}

	public void setMaxSpeed(int maxSpeed) {
		this.maxSpeed = maxSpeed;
	}

	public double getAcceleration0to100() {
		return acceleration0to100;
	}

	public void setAcceleration0to100(double acceleration0to100) {
		this.acceleration0to100 = acceleration0to100;
	}

	public String getTransmissionType() {
		return transmissionType;
	}

	public void setTransmissionType(String transmissionType) {
		this.transmissionType = transmissionType;
	}

	public String getTransmission() {
		return transmission;
	}

	public void setTransmission(String transmission) {
		this.transmission = transmission;
	}

	public int getGearCount() {
		return gearCount;
	}

	public void setGearCount(int gearCount) {
		this.gearCount = gearCount;
	}

	public String getDriveWheel() {
		return driveWheel;
	}

	public void setDriveWheel(String driveWheel) {
		this.driveWheel = driveWheel;
	}

	public String getTurbine() {
		return turbine;
	}

	public void setTurbine(String turbine) {
		this.turbine = turbine;
	}

	public String getEngineLocation() {
		return engineLocation;
	}

	public void setEngineLocation(String engineLocation) {
		this.engineLocation = engineLocation;
	}

	public String getEnginePosition() {
		return enginePosition;
	}

	public void setEnginePosition(String enginePosition) {
		this.enginePosition = enginePosition;
	}

	public double getFuelConsumptionUrban() {
		return fuelConsumptionUrban;
	}

	public void setFuelConsumptionUrban(double fuelConsumptionUrban) {
		this.fuelConsumptionUrban = fuelConsumptionUrban;
	}

	public double getFuelConsumptionExtraUrban() {
		return fuelConsumptionExtraUrban;
	}

	public void setFuelConsumptionExtraUrban(double fuelConsumptionExtraUrban) {
		this.fuelConsumptionExtraUrban = fuelConsumptionExtraUrban;
	}

	public double getFuelConsumptionCombined() {
		return fuelConsumptionCombined;
	}

	public void setFuelConsumptionCombined(double fuelConsumptionCombined) {
		this.fuelConsumptionCombined = fuelConsumptionCombined;
	}

	public int getLength() {
		return length;
	}

	public void setLength(int length) {
		this.length = length;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public String getBodyType() {
		return bodyType;
	}

	public void setBodyType(String bodyType) {
		this.bodyType = bodyType;
	}

	public int getDoorCount() {
		return doorCount;
	}

	public void setDoorCount(int doorCount) {
		this.doorCount = doorCount;
	}

	public String getSeatCount() {
		return seatCount;
	}

	public void setSeatCount(String seatCount) {
		this.seatCount = seatCount;
	}

	public int getRange() {
		return range;
	}

	public void setRange(int range) {
		this.range = range;
	}
	
	public String getCarClass() {
		return carClass;
	}

	public void setCarClass(String carClass) {
		this.carClass = carClass;
	}

	public Model getModel() {
		return model;
	}

	public void setModel(Model model) {
		this.model = model;
	}
	
	@Override
	public String toString() {
		return "Modification [id=" + id + ", modificationName=" + modificationName + ", productionStartDate="
				+ productionStartDate + ", productionEndDate=" + productionEndDate + ", fuelType=" + fuelType
				+ ", engineCode=" + engineCode + ", cylinderPosition=" + cylinderPosition + ", cylinderCount="
				+ cylinderCount + ", cylinderDisplacement=" + cylinderDisplacement + ", power=" + power + ", torque="
				+ torque + ", maxSpeed=" + maxSpeed + ", acceleration0to100=" + acceleration0to100
				+ ", transmissionType=" + transmissionType + ", transmission=" + transmission + ", gearCount="
				+ gearCount + ", driveWheel=" + driveWheel + ", turbine=" + turbine + ", engineLocation="
				+ engineLocation + ", enginePosition=" + enginePosition + ", fuelConsumptionUrban="
				+ fuelConsumptionUrban + ", fuelConsumptionExtraUrban=" + fuelConsumptionExtraUrban
				+ ", fuelConsumptionCombined=" + fuelConsumptionCombined + ", length=" + length + ", weight=" + weight
				+ ", bodyType=" + bodyType + ", doorCount=" + doorCount + ", seatCount=" + seatCount + ", range="
				+ range + ", carClass=" + carClass + "]";
	}

	@Override
	public int compareTo(Modification m) {
		return this.getModificationName().compareTo(m.getModificationName());
	}
	
}
