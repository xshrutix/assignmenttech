import React from 'react';
import { Banner } from "./About/Banner";

import Mission from "./About/Mission";
import Qualities from "./About/Qualities";
import { Services } from './About/Services';
import { GetStarted } from './About/GetStarted';

export const About = () => {
    return (
        <div className="bg-white">
            <Banner />
            <Mission />
            <Qualities />

            <Services />
            <GetStarted />
        </div>
    );
};