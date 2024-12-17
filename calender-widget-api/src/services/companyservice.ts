import { getAppDataStore } from "../domain/dbConnectionManager";
import { CompanyEntity } from "../domain/Entity/CompanyEntity";




interface ICompanyService {

    getCompanyById(id : number) : Promise<CompanyEntity | null>;

    getCompanies() : Promise<CompanyEntity[]>;
}





export class CompanyService implements ICompanyService {

    async getCompanyById(id : number) : Promise<CompanyEntity | null>{

        const repo = await getAppDataStore(CompanyEntity)
        const event = await repo.findOneBy({id})
        return event;
    }


    async getCompanies() : Promise<CompanyEntity[]>{
        const repo = await getAppDataStore(CompanyEntity)
        const companies = await repo.find();
        return companies;
    }


}