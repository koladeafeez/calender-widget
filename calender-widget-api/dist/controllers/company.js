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
exports.getCompanyById = exports.getCompanies = void 0;
const companyservice_1 = require("../services/companyservice");
const express_validator_1 = require("express-validator");
const getCompanies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield new companyservice_1.CompanyService().getCompanies();
    res.status(200).json({ success: true, message: "Displaying Companies", data: result });
});
exports.getCompanies = getCompanies;
const getCompanyById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        var { id } = req.params;
        let result = yield new companyservice_1.CompanyService().getCompanyById(parseInt(id));
        if (result)
            res.status(200).json({ success: true, message: `Displaying Company`, data: result });
        else
            res.status(400).json({ success: false, message: `Company With Id : ${id} not found`, data: null });
    }
    catch (err) {
        next(err);
    }
});
exports.getCompanyById = getCompanyById;
//# sourceMappingURL=company.js.map