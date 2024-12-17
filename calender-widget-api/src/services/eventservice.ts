import { getAppDataStore } from "../domain/dbConnectionManager";
import { EventEntity } from "../domain/Entity/EventEntity";


interface IEventService {
    getTop10Event() : Promise<EventEntity[]>; 

    getEventById(id : number) : Promise<EventEntity | null>;
}

export class EventService implements IEventService {

    async  getTop10Event(): Promise<EventEntity[]> {
        const repo = await getAppDataStore(EventEntity);
        const events  = await repo.find({take:10})
        return events
    }

    async getEventById(id : number) : Promise<EventEntity | null>{
        const repo = await getAppDataStore(EventEntity);
        const event = await repo.findOneBy({id})
        return event;
    }


}