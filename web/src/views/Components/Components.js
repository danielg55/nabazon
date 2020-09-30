import React from "react";
import classNames from "classnames";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
import Home from "./Sections/Home.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import Navbar from "./Navbar";

const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    return (
        <Router>
            <Navbar props={props}/>
            <Parallax image={require("assets/img/nabazon.jfif")}/>
            <Footer/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <Switch>
                    {/*Here all of the tabs are defined! Note: A link should be defined in the Navbar component*/}
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/examples">
                        <Example/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}

// TODO: Delete!
function Example() {
    return <h1>example</h1>
}
