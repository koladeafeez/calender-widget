import { NextFunction, Request, Response, RequestHandler } from "express";
import { Result, check, validationResult, ValidationChain } from "express-validator";

const validateBooking : (ValidationChain | RequestHandler)[] = [
    check('eventId')
        .isInt({ min: 1 })
        .withMessage('Invalid eventId!')
        .bail(),
        check('ticketCount')
        .isInt({ min: 1 })
        .withMessage('Minimum ticket is 1!')
        .bail(),
    // Middleware to handle validation result
    ((req: Request, res: Response, next: NextFunction) => {
        const errors: Result = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }) as RequestHandler
];

export default validateBooking;
