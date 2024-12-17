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
exports.bookingService = void 0;
const BookingEntity_1 = require("../domain/Entity/BookingEntity");
const EventEntity_1 = require("../domain/Entity/EventEntity");
const serviceresult_1 = require("../models/serviceresult");
const dbConnectionManager_1 = require("../domain/dbConnectionManager");
class bookingService {
    saveBooking(model) {
        return __awaiter(this, void 0, void 0, function* () {
            // fetch the event
            let eventRepo = yield (0, dbConnectionManager_1.getAppDataStore)(EventEntity_1.EventEntity);
            let bookingRepo = yield (0, dbConnectionManager_1.getAppDataStore)(BookingEntity_1.BookingEntity);
            let event = yield eventRepo.findOneBy({ id: model.eventId });
            if (!event)
                return new serviceresult_1.ServiceResult("Event Not Found", 400, null);
            var newBooking = {
                eventId: model.eventId,
                name: event.name,
                ticketCount: model.ticketCount,
            };
            let result = yield bookingRepo.save(newBooking);
            return new serviceresult_1.ServiceResult("Booking Created", 201, result);
        });
    }
}
exports.bookingService = bookingService;
//# sourceMappingURL=bookingservice.js.map