import React, {useState} from "react";
import Calendar from './Calendar'

export const appointments = [
    {
        title: 'Website Re-Design Plan',
        startDate: new Date(2020, 9, 30, 9, 35),
        endDate: new Date(2020, 9, 30, 11, 30),
        id: 0,
        location: 'Room 1',
    }, {
        title: 'Book Flights to San Fran for Sales Trip',
        startDate: new Date(2020, 9, 29, 12, 11),
        endDate: new Date(2020, 9, 30, 13, 0),
        id: 1,
        location: 'Room 1',
    }
    ]

export default function CalendarPage(props) {
    return (
        <div>
            <Calendar
                appointments={appointments}
            />
        </div>
    );
}
