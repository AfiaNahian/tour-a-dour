import React from 'react';
import Banner from '../Banner/Banner';
import Customers from '../Customers/Customers';

import FAQ from '../FAQ/FAQ';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Customers></Customers>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;