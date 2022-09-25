import {
    ALL_EVENTS_REQUEST,
    ALL_EVENTS_SUCCESS,
    ALL_EVENTS_FAIL,
} from '../constants/eventsConst.js';
import axios from 'axios';

export const getEvents = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_EVENTS_REQUEST });
        const link = `http://localhost:8000/api/events`;

        const data = await axios.get(link);
        dispatch({
            type: ALL_EVENTS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ALL_EVENTS_FAIL,
            payload: error.message
        });
    }
};