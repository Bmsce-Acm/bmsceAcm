import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { allYearWiseEvents, clearErrors } from '../../Actions/eventsActs.js';

const monthMap = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
}

const AllEvents = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { events, yearsList, error } = useSelector((state) => state.events);
    const thisYear = new Date().getFullYear();

    const [reqYear, setReqYear] = useState(thisYear);

    const setRequiredYear = (year) => {
        setReqYear(year);
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(allYearWiseEvents(`${reqYear}`));
    }, [error, dispatch, alert, reqYear]);

    return (
        <div className='events__section'>
            <div className='years_list'>
                {
                    yearsList.length > 1 &&
                    yearsList.map((year) => {
                        return (
                            <>
                                <button onClick={() => setRequiredYear(`${year}`)} key={{ year }}>
                                    {year}
                                </button>
                            </>
                        )
                    })
                }
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
                                                    <span>{event.event_date.substring(8, 10)} {monthMap[event.event_date.substring(5, 7)]} {event.event_date.substring(0, 4)}</span>
                                                </div>
                                                <div className='eve_desc'>
                                                    <span>{event.description}</span>
                                                </div>
                                                <div className='eve_btn'>
                                                    <button>
                                                        Explore
                                                    </button>
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
        </div>
    )
}

export default AllEvents