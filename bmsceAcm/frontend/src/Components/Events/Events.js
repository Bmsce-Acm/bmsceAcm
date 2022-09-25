import React from 'react';
import { Link } from "react-router-dom";
import Title from "../Title";
import EventsBanner from './EventsBanner';
import AllEvents from './AllEvents';

const Events = () => {

    return (
        <>
            <Title title="Events" />
            <EventsBanner />
            <AllEvents />
        </>
    );
};

export default Events;