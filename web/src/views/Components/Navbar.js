import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import React from "react";

export default function Navbar(props) {
    const {...rest} = props;
    return <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
            <Header
                brand="Info Color"
                rightLinks={<HeaderLinks/>}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
        </GridItem>
    </GridContainer>;
}