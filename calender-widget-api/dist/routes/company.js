"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_1 = require("../controllers/company");
const express_validator_1 = require("express-validator");
const companyRouter = (0, express_1.Router)();
companyRouter.get('/', company_1.getCompanies);
companyRouter.get('/:id', [
    (0, express_validator_1.param)('id')
        .isInt({ min: 1 })
        .withMessage('Request URL requires a valid company id')
], company_1.getCompanyById);
exports.default = companyRouter;
//# sourceMappingURL=company.js.map