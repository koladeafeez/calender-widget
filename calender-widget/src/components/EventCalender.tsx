import React, { useState, useEffect } from "react";
import ProductCalender from "./Calender";
import { parseDate } from '@internationalized/date';
import { useDateFormatter } from 'react-aria';
import { getLocalTimeZone } from '@internationalized/date';
import { useData } from "../contexts/EventContext";
import formatEventDate from "../helpers/dateformater";
import { EventModel } from "../models/Event";


const EventCalender : React.FC<{sentEvent : any, companyName : string}> = ({sentEvent, companyName }) => {
    const currentDate = new Date(); 
    const formattedDate = currentDate.toISOString().split('T')[0];

    let [calenderValue, setCalenderValue] = useState(parseDate(formattedDate));
    const { data  } = useData();

    let [eventData, setEventData] = useState(data);
    let formatter = useDateFormatter({ dateStyle: 'full' });

    let shortMonths = ["JAN", "FEB", "MAR", "APR", "MAY",
        "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    

    const [showCalendar, setShowCalendar] = useState(false);
    const [filteredText, setFilteredText] = useState(`Showing Events for ${calenderValue.toString()}`);

    useEffect(() => {
        if (data != null && data.length > 0) {
            let filteredEvent = data.filter((x : EventModel) => new Date(x.date).getFullYear() === calenderValue.year &&
                new Date(x.date).getMonth() + 1 === calenderValue.month &&
                new Date(x.date).getDate() === calenderValue.day);

            if (filteredEvent.length == 0) {
                setEventData(data);
                setFilteredText("No Event found on selected Date, Showing All Event(s)");
            } else {
                setEventData(filteredEvent);
            }
        }

    }, [data, calenderValue]);

    // Toggle Calendar visibility
    const handleInputClick = (action: string) => {
        if (action === "open") setShowCalendar(true);
        else setShowCalendar(false);
    };


    const handleTicketSelected = (event: EventModel) => {
        sentEvent(event);
    };

    function getTheMonth(date: Date): string {
        let m: number = new Date(date).getMonth();
        return shortMonths[m]
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background">
            <div className="w-full max-w-md rounded-lg shadow-md overflow-hidden bg-background">
             
                <header className="text-center p-6 border-b border-gray-200 text-text">
                    <h1 className="text-2xl font-bold ">{companyName}</h1>
                    <p className="text-text mt-2">Select Date</p>
                </header>

                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Filter by Date"
                            onFocus={() => handleInputClick("open")}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                        <button
                            type="button"
                            className="text-text hover:text-teal-500"
                            onClick={() => handleInputClick("close")}
                        >
                            X
                        </button>
                    </div>

                    {showCalendar && (
                        <div className="mt-4 bg-background p-4 rounded border transition-opacity duration-500 opacity-100">
                            <h3 className="text-lg font-semibold mb-2">Select a Day</h3>
                            <ProductCalender aria-label="Event date" value={calenderValue}
                                onChange={setCalenderValue} />
                            <p>Selected date: {formatter.format(calenderValue.toDate(getLocalTimeZone()))}</p>
                        </div>
                    )}
                </div>

                <div className="p-4 space-y-4">
                    <h2> {filteredText} </h2>
                    {eventData.map((event : EventModel) => {
                        return (
                            <div className="flex items-center border-b pb-4 last:border-b-0" key={event.id}>
                                <div className="text-center mr-4">
                                    <span className="block text-red-500 font-bold text-sm">{getTheMonth(event.date)}</span>
                                    <span className="block text-text text-2xl font-bold">{new Date(event.date).getDate()}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-text font-semibold text-lg">
                                        {formatEventDate(event.date)}
                                    </h3>
                                    <p className="text-text text-sm">{event.location}</p>
                                    <p className="text-text text-xs">
                                        {event.shortDescription}
                                    </p>
                                </div>
                                <button className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                                onClick={() => handleTicketSelected(event)}>
                                    Tickets
                                </button>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
};

export default EventCalender;
