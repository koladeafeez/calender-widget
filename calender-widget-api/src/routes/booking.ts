import { Router } from 'express';
import { saveCompanyBooking } from '../controllers/booking';
import validateBooking from '../models/validators/bookingvalidator';

const bookingRouter = Router();

bookingRouter.post('/', validateBooking, saveCompanyBooking);

export default bookingRouter;
