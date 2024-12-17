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
exports.saveCompanyBooking = void 0;
const bookingservice_1 = require("../services/bookingservice");
const saveCompanyBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const model = req.body;
        let result = yield new bookingservice_1.bookingService().saveBooking(model);
        let { message, data } = result;
        res.status(result.status).json({ message, data });
    }
    catch (err) {
        next(err);
    }
});
exports.saveCompanyBooking = saveCompanyBooking;
//# sourceMappingURL=booking.js.map