import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getEvent } from '../../Api/eventsApi';
import { getAllEvents } from '../../Api/eventsApi';
import { getFilteredEvents } from '../../Api/eventsApi';
import CardItem from '../Home/CardItem';

const EventPage = () => {

    const params = useParams();
    const id = params.id - 1;

    const currEvent = getEvent(id);
    const allEvents = getAllEvents();

    const otherEvents = allEvents.filter(anEvent => anEvent.id !== id + 1);

    return (
        <>
            <div className='event__content'>
                <div className='event__name'>
                    {currEvent.title} ({currEvent.label})
                </div>
                <div className="event_poster">
                    <img src={currEvent.image} alt={currEvent.title} width="500px" height="500px" />
                </div>
                <div className='event__desc'>
                    {currEvent.content ? currEvent.content[0] : "None"}
                </div>
                <div className="other_images">
                    <img className="oimgs" src="https://res.cloudinary.com/dotl5onov/image/upload/v1663501641/bmsce_acm/Events/AI_in_cog_sci/Screenshot_2022-09-18_171702_werrf9.png" alt={currEvent.title}
                        width="380px" height="300px"
                    />
                    <img className="oimgs" src="https://res.cloudinary.com/dotl5onov/image/upload/v1663501641/bmsce_acm/Events/AI_in_cog_sci/Screenshot_2022-09-18_171702_werrf9.png" alt={currEvent.title}
                        width="380px" height="300px"
                    />
                    <img className="oimgs" src="https://res.cloudinary.com/dotl5onov/image/upload/v1663501641/bmsce_acm/Events/AI_in_cog_sci/Screenshot_2022-09-18_171702_werrf9.png" alt={currEvent.title}
                        width="380px" height="300px"
                    />
                </div>
                <div className='event__desc'>
                    {currEvent.content ? currEvent.content[1] : "None"}
                </div>
            </div>
            <div className='other__events'>
                {
                    otherEvents.length > 0 && (
                        <>
                            <h1>Other Events</h1>
                            <div className='cards__container'>
                                <div className="cards__wrapper">
                                    {
                                        otherEvents.map((event) => {
                                            return (
                                                <ul className="cards__items">
                                                    <CardItem
                                                        src={event.image}
                                                        text={event.title}
                                                        label={event.label}
                                                        path={`/event/${event.id}/`}
                                                    />
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
        </>
    )
}

export default EventPage