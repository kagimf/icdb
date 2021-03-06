import { Model } from '../model/model';

export class Modification{
    id:number;
    model:Model;
    modificationName:string;
    productionStartDate:number;
    productionEndDate:number;
    fuelType:string;
    engineCode:string;
    cylinderPosition:string;
    cylinderCount:number;
    cylinderDisplacement:number;
    power:number;
    torque:number;
    maxSpeed:number;
    acceleration0to100:number;
    transmissionType:string;
    transmission:string;
    gearCount:number;
    driveWheel:string;
    turbine:string;
    engineLocation:string;
    enginePosition:string;
    fuelConsumptionUrban:number;
    fuelConsumptionExtraUrban:number;
    fuelConsumptionCombined:number;
    length:number;
    weight:number;
    bodyType:string;
    doorCount:number;
    seatCount:string;
    range:number;
    carClass:string;
    roundedCylinderDisplacement:string;

    constructor(
        modificationId:number,
        modelId:number,
        modificationName:string,
        productionStartDate:number,
        productionEndDate:number,
        fuelType:string,
        engineCode:string,
        cylinderPosition:string,
        cylinderCount:number,
        cylinderDisplacement:number,
        power:number,
        torque:number,
        maxSpeed:number,
        acceleration0to100:number,
        transmissionType:string,
        transmission:string,
        gearCount:number,
        driveWheel:string,
        turbine:string,
        engineLocation:string,
        enginePosition:string,
        fuelConsumptionUrban:number,
        fuelConsumptionExtraUrban:number,
        fuelConsumptionCombined:number,
        length:number,
        weight:number,
        bodyType:string,
        doorCount:number,
        seatCount:string,
        range:number,
        carClass:string,
        roundedCylinderDisplacement:string){};
}