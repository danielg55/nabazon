import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import ImgMediaCard from "./ImageMediaCard";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2 align={"right"}>פעילויות מומלצות</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3 align={"right"}>
              <small>ספורט</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={6} sm={3}>
                <ImgMediaCard></ImgMediaCard>
            </GridItem>
            <GridItem xs={6} sm={3}>
                <ImgMediaCard></ImgMediaCard>
            </GridItem>
            <GridItem xs={6} sm={3}>
                <ImgMediaCard></ImgMediaCard>
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3 align={"right"}>
              <small>משחקים</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={6} sm={3}>
                <ImgMediaCard></ImgMediaCard>
            </GridItem>
            <GridItem xs={6} sm={3}>
                <ImgMediaCard></ImgMediaCard>
            </GridItem>
            <GridItem xs={6} sm={3}>
                <ImgMediaCard></ImgMediaCard>
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3 align={"right"}>
              <small>אחר</small>
            </h3>
          </div>
          <GridContainer justify="center"><GridItem xs={6} sm={3}>
                <ImgMediaCard></ImgMediaCard>
            </GridItem>
            <GridItem xs={6} sm={3}>
                <ImgMediaCard></ImgMediaCard>
            </GridItem>
            <GridItem xs={6} sm={3}>
                <ImgMediaCard></ImgMediaCard>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
