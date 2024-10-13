import React from "react";
import Home from "./Home";
import Discover from "./Discover";
import Footer from "./Footer";
import Places from "./Places";


const HomePage = () => {
    return(
        <>
            <Home />
            <Discover />
            <Places />
            <Footer />
        </>

    );
};

export default HomePage;