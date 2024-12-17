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
exports.getEventById = exports.getTop10Event = void 0;
const eventservice_1 = require("../services/eventservice");
const getTop10Event = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield new eventservice_1.EventService().getTop10Event();
    res.status(200).json({ success: true, message: "Displaying Event(s)", data: result });
});
exports.getTop10Event = getTop10Event;
const getEventById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let eventId = parseInt(id);
    if (isNaN(eventId)) {
        res.status(422).json({ message: 'Request URL require event id', data: null });
        return;
    }
    let result = yield new eventservice_1.EventService().getEventById(eventId);
    if (result) {
        res.status(200).json({ message: 'Displaying Event', data: result });
    }
    else {
        res.status(400).json({ message: `Event ${id} not found`, data: null });
    }
});
exports.getEventById = getEventById;
//# sourceMappingURL=event.js.map