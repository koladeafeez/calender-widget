import {Router} from 'express'
import {getCompanies, getCompanyById} from "../controllers/company"

import {check, param} from 'express-validator' 

const companyRouter = Router();

companyRouter.get('/', getCompanies );

companyRouter.get('/:id', [
    param('id')
    .isInt({ min: 1 })
        .withMessage('Request URL requires a valid company id')
  ], getCompanyById );


export default companyRouter;