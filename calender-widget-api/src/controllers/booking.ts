
import { RequestHandler } from "express"
import { bookingService } from "../services/bookingservice"
import { ServiceResult } from "../models/serviceresult"
import { BookingEntity } from "../domain/Entity/BookingEntity"




export const saveCompanyBooking: RequestHandler = async (req, res, next) => {
try {
    const model = req.body
    let result : ServiceResult<BookingEntity | null> = await new bookingService().saveBooking(model)
    let {message, data} = result;    
    res.status(result.status).json({ message, data } );

  } catch (err) {
    next(err);
  }

}



