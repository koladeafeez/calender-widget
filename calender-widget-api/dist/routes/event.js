"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_1 = require("../controllers/event");
const eventRouter = (0, express_1.Router)();
eventRouter.get('/', event_1.getTop10Event);
eventRouter.get('/:id', event_1.getEventById);
exports.default = eventRouter;
//# sourceMappingURL=event.js.map