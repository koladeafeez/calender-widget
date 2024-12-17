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
exports.getAppDataStore = exports.seedUsers = exports.initializeDataSource = void 0;
const typeorm_1 = require("typeorm");
const EventEntity_1 = require("./Entity/EventEntity");
const CompanyEntity_1 = require("./Entity/CompanyEntity");
const BookingEntity_1 = require("./Entity/BookingEntity");
let AppDataStore = undefined;
const initializeDataSource = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        AppDataStore = new typeorm_1.DataSource({
            type: "sqlite",
            database: ":memory:", // In-memory SQLite database
            synchronize: true, // Automatically creates the schema
            logging: false,
            entities: [EventEntity_1.EventEntity, CompanyEntity_1.CompanyEntity, BookingEntity_1.BookingEntity], // Register entities here
        });
        yield AppDataStore.initialize();
        console.log(`In memory Db initialized`);
        yield (0, exports.seedUsers)(AppDataStore);
        const users = yield AppDataStore.getRepository("Event").find();
        console.log("Seeded Users:", users);
    }
    catch (err) {
        if (err instanceof Error)
            console.error(`dbConnectionManager - error initializing db. Error: ${err === null || err === void 0 ? void 0 : err.message}`);
    }
});
exports.initializeDataSource = initializeDataSource;
const seedUsers = (dataSource) => __awaiter(void 0, void 0, void 0, function* () {
    const eventRepository = dataSource.getRepository(EventEntity_1.EventEntity);
    const companyRepository = dataSource.getRepository(CompanyEntity_1.CompanyEntity);
    // Define seed data
    let currDate = new Date();
    const events = [
        {
            id: 1, name: "Glasgow Connect", date: Date.now(),
            location: 'George Square - Third Floor, Glasgow', availableTicket: 10, shortDescription: 'Glasgow Node Community'
        },
        {
            id: 2, name: "Edinbrugh Connect", date: Date.now(),
            location: 'George Square - Third Floor, Glasgow', availableTicket: 10, shortDescription: 'Edibrugh Tech Connect'
        },
        {
            id: 3, name: "Stirling Sightseeing", date: Date.now(),
            location: 'Stirling Castle - After River Forth', availableTicket: 10, shortDescription: 'Stirling City Sightseeing'
        },
        {
            id: 4, name: "Stirling Sightseeing", date: currDate.setDate(currDate.getDate() + 1),
            location: 'Stirling Castle - After River Forth', availableTicket: 10, shortDescription: 'Stirling City Sightseeing'
        },
        {
            id: 5, name: "Edinbrugh Connect", date: currDate.setDate(currDate.getDate() + 1),
            location: 'George Square - Third Floor, Glasgow', availableTicket: 10, shortDescription: 'Edibrugh Tech Connect'
        },
        {
            id: 6, name: "Edinbrugh Connect", date: currDate.setDate(currDate.getDate() + 2),
            location: 'George Square - Third Floor, Glasgow', availableTicket: 10, shortDescription: 'Edibrugh Tech Connect'
        },
    ];
    const companies = [
        { id: 1, name: 'Tour Worldwide', color: 'dark' },
        { id: 2, name: 'Scotland Adventurer', color: 'light' },
        { id: 3, name: 'Stirling Watcher', color: 'dark' }
    ];
    yield eventRepository.save(events);
    console.log("Event seeded successfully!");
    yield companyRepository.save(companies);
    console.log("Companies seeded successfully!");
});
exports.seedUsers = seedUsers;
const getAppDataStore = (entity) => __awaiter(void 0, void 0, void 0, function* () {
    if (!AppDataStore) {
        throw new Error('AppDataStore has not been initialized!');
    }
    const repo = AppDataStore.getRepository(entity);
    return repo;
});
exports.getAppDataStore = getAppDataStore;
//# sourceMappingURL=dbConnectionManager.js.map