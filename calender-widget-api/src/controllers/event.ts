import { RequestHandler } from "express";
import { EventService } from "../services/eventservice";




export const getTop10Event : RequestHandler = async (req, res, next) => {
        let result = await new EventService().getTop10Event()
        res.status(200).json({success : true, message : "Displaying Event(s)", data : result})
    }



export const getEventById : RequestHandler = async (req, res) => {
    let { id } = req.params;
    let eventId = parseInt(id);
    if(isNaN(eventId))
    {
        res.status(422).json({message : 'Request URL require event id', data : null })
        return;
    }

    let result = await new EventService().getEventById(eventId);
    if(result)
    {
        res.status(200).json({ message : 'Displaying Event', data :result});
    }else
    {
     res.status(400).json({message : `Event ${id} not found`, data : null});
    }
}