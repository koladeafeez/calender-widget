"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const dbConnectionManager_1 = require("../domain/dbConnectionManager");
const CompanyEntity_1 = require("../domain/Entity/CompanyEntity");
class CompanyService {
    getCompanyById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = yield (0, dbConnectionManager_1.getAppDataStore)(CompanyEntity_1.CompanyEntity);
            const event = yield repo.findOneBy({ id });
            return event;
        });
    }
    getCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = yield (0, dbConnectionManager_1.getAppDataStore)(CompanyEntity_1.CompanyEntity);
            const companies = yield repo.find();
            return companies;
        });
    }
}
exports.CompanyService = CompanyService;
//# sourceMappingURL=companyservice.js.map