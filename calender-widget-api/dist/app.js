"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const event_1 = __importDefault(require("./routes/event"));
const dbConnectionManager_1 = require("./domain/dbConnectionManager");
const company_1 = __importDefault(require("./routes/company"));
const errorhandler_1 = require("./routes/errorhandler");
const booking_1 = __importDefault(require("./routes/booking"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)());
(0, dbConnectionManager_1.initializeDataSource)();
app.use('/api/events', event_1.default);
app.use('/api/companies', company_1.default);
app.use('/api/companies/:id/booking', booking_1.default);
app.get("/", (req, res) => {
    res.send("welcome");
});
app.use(errorhandler_1.errorHandler);
app.listen(PORT, () => {
    console.log("App Running on " + PORT);
});
//# sourceMappingURL=app.js.map