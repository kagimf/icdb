import { Brand } from '../brand/brand';

export class Model{
    id:number;
    brand:Brand;
    modelName:string;
    generation:number;
    codeName:string;
    isFacelifted:boolean;
    productionStartDate:number;
    productionEndDate:number;
    segment:string;
    codeNameorGeneration:string;

    constructor(
        modelId: number,
        brandId: number,
        modelName: string,
        fullModelName: string,
        generation: number,
        codeName: string,
        isFacelifed: boolean,
        productionStartDate: number,
        productionEndDate: number,
        segment: string){};
}