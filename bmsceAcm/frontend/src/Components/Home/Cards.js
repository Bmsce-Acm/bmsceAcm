import React from 'react';
import { getAllEvents } from '../../Api/eventsApi';
import CardItem from './CardItem';

const Cards = () => {

    const events = getAllEvents();

    return (
        <div className="cards">
            <h1>
                Recent Events
            </h1>
            <div className='cards__container'>
                <div className="cards__wrapper">
                    {
                        events.map((event) => {
                            return (
                                <ul className="cards__items">
                                    <CardItem
                                        src={event.image}
                                        text={event.title}
                                        label={event.label}
                                        path={`event/${event.id}`}
                                    />
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards;