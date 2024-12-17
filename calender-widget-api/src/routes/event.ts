import {Router} from 'express'
import { getEventById, getTop10Event } from '../controllers/event';

const eventRouter = Router();


eventRouter.get('/', getTop10Event );

eventRouter.get('/:id', getEventById );


export default eventRouter;