import React from "react";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import ImgMediaCard from "./ImageMediaCard";

const useStyles = makeStyles(styles);

export default function Home() {
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
                <ImgMediaCard headline="כדורעף בגנצו" description="כדורעף הכי שווה בבסיס עושים מלא מלא כיף!!"></ImgMediaCard>
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
