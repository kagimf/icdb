import { Company } from '../company/company';

export class Brand {
    id: number;
    company: Company;
    brandName: string;
    coutry:string;

    constructor(brandId: number,
        companyId: number,
        brandName: string,
        coutry:string){};
}