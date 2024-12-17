import { BookingEntity } from "../domain/Entity/BookingEntity";
import { Booking } from "../models/booking";
import { EventEntity } from "../domain/Entity/EventEntity";
import { ServiceResult } from "../models/serviceresult";
import { getAppDataStore } from "../domain/dbConnectionManager";




interface IbookingService {
    saveBooking(model : Booking): Promise<ServiceResult<BookingEntity | null>>; 

}


export class bookingService implements IbookingService {

    async  saveBooking(model : Booking): Promise<ServiceResult<BookingEntity | null>> {
        
        // fetch the event
        let eventRepo = await getAppDataStore(EventEntity);
        let bookingRepo = await getAppDataStore(BookingEntity);

        let event = await eventRepo.findOneBy({id : model.eventId});

        if(!event)
           return new ServiceResult<null>("Event Not Found", 400, null); 

        var newBooking : BookingEntity = {      
            eventId : model.eventId,
            name : event.name,
            ticketCount : model.ticketCount,

        };

        let result : BookingEntity = await bookingRepo.save(newBooking);
        return new ServiceResult<BookingEntity>("Booking Created", 201, result);

    }

}