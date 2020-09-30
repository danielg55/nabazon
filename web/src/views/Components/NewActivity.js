import React, {useEffect, useState} from "react";
import axios from 'axios';
import Events from "./Events";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "./ImageMediaCard";



import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);


export default function Home() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios("http://localhost:5000/");
            setEvents(result.data.messages);
        }

        fetchData();
    }, []);

    const classes = useStyles();

    return <div className={classes.sections}>
        <div className={classes.container}>
            <div className={classes.title}>
                <h2 align="center">כדגלחכדגךלחכ</h2>
            </div>
            <Grid container spacing={10} justify="center">
                {events.map(event => {
                    return (<Grid item xs={6} sm={3}>
                        <ImgMediaCard headline={event.title}
                                      description={event.description}/>
                    </Grid>)
                })}
            </Grid>
        </div>
    </div>
}
