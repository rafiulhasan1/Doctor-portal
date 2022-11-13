import React from 'react';
import Appoiment from '../Appoiment/Appoiment';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Contruct from '../Contruct/Contruct';
import InformationCard from '../InformationCard/InformationCard';
import People from '../People/People';
import Questions from '../Questions/Questions';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InformationCard></InformationCard>
            <Services></Services>
            <Care></Care>
            <Appoiment></Appoiment>
            <Questions></Questions>
            <People></People>
            <Contruct></Contruct>
        </div>
    );
};

export default Home;