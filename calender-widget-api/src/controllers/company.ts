import { RequestHandler } from "express";
import { CompanyService } from "../services/companyservice";
import {validationResult} from 'express-validator';


export const getCompanies: RequestHandler = async (req, res) => {
    let result = await new CompanyService().getCompanies();
    res.status(200).json({ success : true,  message: "Displaying Companies", data: result });
}


export const getCompanyById: RequestHandler = async (req, res, next) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }

        var {id} = req.params; 
        let result = await new CompanyService().getCompanyById(parseInt(id));
        
        if (result)
            res.status(200).json({ success : true, message : `Displaying Company`,  data : result});
        else
            res.status(400).json({ success: false, message: `Company With Id : ${id} not found`, data : null });

    } catch (err) {
        next(err);
    }
}