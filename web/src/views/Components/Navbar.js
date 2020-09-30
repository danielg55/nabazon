import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function LinkButton(props) {
    return <Button color="inherit">{props.href.substring(1)}</Button>;
}

export default function Navbar(props) {
    const classes = useStyles();

    return <div className={classes.root}>
        <AppBar position="fixed" color="default">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h5" className={classes.title}>
                    Nabazon
                </Typography>
                <Link href="/new_activity" to="/new_activity" component={LinkButton}/>
                <Link to="/calendar" component={LinkButton}/>
                <Link to="/about" component={LinkButton}/>
            </Toolbar>
        </AppBar>
    </div>
}