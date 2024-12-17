
import { DataSource } from "typeorm"
import { EventEntity } from "./Entity/EventEntity";
import { CompanyEntity } from "./Entity/CompanyEntity";
import { BookingEntity } from "./Entity/BookingEntity";
import { Repository, EntityTarget, ObjectLiteral } from "typeorm";



let AppDataStore: DataSource | undefined = undefined;

export const initializeDataSource = async (): Promise<void> => {
    try {
    AppDataStore = new DataSource({
        type: "sqlite",
        database: ":memory:", // In-memory SQLite database
        synchronize: true,    // Automatically creates the schema
        logging: false,
        entities: [EventEntity, CompanyEntity, BookingEntity],     // Register entities here
    });

    await AppDataStore.initialize()
    console.log(`In memory Db initialized`)
    await seedUsers(AppDataStore);

    const users = await AppDataStore.getRepository("Event").find();
    console.log("Seeded Users:", users);
} catch (err : unknown) {
    if (err instanceof Error)
        console.error(`dbConnectionManager - error initializing db. Error: ${err?.message}`)

}
};



export const seedUsers = async (dataSource: DataSource) => {
    const eventRepository = dataSource.getRepository(EventEntity);
    const companyRepository = dataSource.getRepository(CompanyEntity);

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

    await eventRepository.save(events);
    console.log("Event seeded successfully!");


    await companyRepository.save(companies);
    console.log("Companies seeded successfully!");


};



export const getAppDataStore = async <T extends ObjectLiteral>(
    entity: EntityTarget<T>
): Promise<Repository<T>> => {
    if (!AppDataStore) {
        throw new Error('AppDataStore has not been initialized!');
    }

    const repo: Repository<T> = AppDataStore.getRepository(entity);
    return repo;
};