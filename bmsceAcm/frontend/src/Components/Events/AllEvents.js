import React, { useState, useEffect } from 'react';
import { getAllEvents } from '../../Api/eventsApi';
import CardItem from '../Home/CardItem';
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { allEvents, clearErrors } from '../../Actions/eventsActs.js';

const AllEvents = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { events, error } = useSelector((state) => state.events);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(allEvents());
    }, [error, dispatch, alert]);

    // const years_list = [...new Set(events.map((eve) => { return eve.event_date.substring(0, 4) }))];

    // const thisYear = new Date().getFullYear();
    // const this_year_events = events.filter((eve) => {
    //     return eve.event_date.substring(0, 4) === `${thisYear}`;
    // });

    // const [currevents, setCurrEvents] = useState(this_year_events);

    // const filterEvents = (this_year) => {
    //     const updatedEvents = events.filter((currEve) => {
    //         return Number(currEve.event_date.substring(0, 4)) === this_year
    //     });
    //     setCurrEvents(updatedEvents);
    // }

    return (
        <div className='events__section'>
            <div className='years_list'>
                {/* {
                    years_list.length > 1 &&
                    years_list.map((year) => {
                        return (
                            <>
                                <button onClick={() => filterEvents(`${year}`)} key={{ year }}>
                                    {year}
                                </button>
                            </>
                        )
                    })
                } */}
            </div>
            <div className="events__main">
                <div className='eve__container'>
                    <div className="eve__wrapper">
                        {
                            events.map((event) => {
                                return (
                                    <div className='mn_eve_crd'>
                                        <div className='card_eve'>
                                            <div className='eve_img'>
                                                <img src={event.thumbnail} />
                                            </div>
                                            <div className='eve_cnt'>
                                                <div className='eve_hd'>
                                                    <h1>{event.name}</h1>
                                                </div>
                                                <div className='eve_date'>
                                                    <span>{event.event_date}</span>
                                                </div>
                                                <div className='eve_desc'>
                                                    <span>{event.description}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* <div className='years_list'>
                {
                    years_list.length > 1 &&
                    years_list.map((year) => {
                        return (
                            <>
                                <button onClick={() => filterEvents(`${year}`)} key={{ year }}>
                                    {year}
                                </button>
                            </>
                        )
                    })
                }
            </div>
            <div className="events__main">
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
                                        // path={`/event/${event.id}`}
                                        />
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default AllEvents