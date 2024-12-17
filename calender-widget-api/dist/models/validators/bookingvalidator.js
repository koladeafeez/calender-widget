"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateBooking = [
    (0, express_validator_1.check)('eventId')
        .isInt({ min: 1 })
        .withMessage('Invalid eventId!')
        .bail(),
    (0, express_validator_1.check)('ticketCount')
        .isInt({ min: 1 })
        .withMessage('Minimum ticket is 1!')
        .bail(),
    // Middleware to handle validation result
    ((req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    })
];
exports.default = validateBooking;
//# sourceMappingURL=bookingvalidator.js.map