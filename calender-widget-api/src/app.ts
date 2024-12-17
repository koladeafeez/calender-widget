import express, { NextFunction, Request, Response } from 'express';
import {json} from 'body-parser'
import "reflect-metadata";
import cors from 'cors'
import {config} from 'dotenv';

import eventRouter from './routes/event';
import { initializeDataSource } from './domain/dbConnectionManager';
import companyRouter from './routes/company';
import {errorHandler} from './routes/errorhandler'
import bookingRouter from './routes/booking';

config();

const app = express();


const PORT = process.env.PORT || 4000;

app.use(json());

app.use(cors());


initializeDataSource();


app.use('/api/events', eventRouter);

app.use('/api/companies', companyRouter);

app.use('/api/companies/:id/booking', bookingRouter)

app.get("/", (req, res) => {
    res.send("welcome");
})

app.use(errorHandler);

app.listen(PORT, () => {
    console.log("App Running on " + PORT);
});