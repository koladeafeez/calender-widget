"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booking_1 = require("../controllers/booking");
const bookingvalidator_1 = __importDefault(require("../models/validators/bookingvalidator"));
const bookingRouter = (0, express_1.Router)();
bookingRouter.post('/', bookingvalidator_1.default, booking_1.saveCompanyBooking);
exports.default = bookingRouter;
//# sourceMappingURL=booking.js.map