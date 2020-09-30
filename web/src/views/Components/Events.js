import React from 'react';
import ImgMediaCard from "./ImageMediaCard";
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(styles);

export default function Events(props) {
    const classes = useStyles();

    return <div className={classes.sections}>
        <div className={classes.container}>
            <div className={classes.title}>
                <h2 align="center">פעילויות</h2>
            </div>
            <Grid container spacing={10} justify="center">
                {props.events.map(event => {
                    return (<Grid item xs={6} sm={3}>
                        <ImgMediaCard title={event.title}
                                      description={event.description}/>
                    </Grid>)
                })}
            </Grid>
        </div>
    </div>
}
