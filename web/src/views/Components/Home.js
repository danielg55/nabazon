import React, {useEffect, useState} from "react";
import axios from 'axios';
import Events from "./Events";

export default function Home() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios("http://localhost:5000/");
            setEvents(result.data.messages);
        }

        fetchData();
    }, []);

    return (
        <Events events={events}/>
    );
}
