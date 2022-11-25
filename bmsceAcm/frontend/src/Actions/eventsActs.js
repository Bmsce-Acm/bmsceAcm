import {
    ALL_EVENTS_REQUEST,
    ALL_EVENTS_SUCCESS,
    ALL_EVENTS_FAILURE,
} from '../Constants/eventsConsts.js';
import { CLEAR_ERROR_MESSAGE } from '../Constants/errConsts.js';
import axios from 'axios';

export const allEvents = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_EVENTS_REQUEST });
        let link = `http://localhost:8000/api/events/`;
        const { data } = await axios.get(link);
        dispatch({
            type: ALL_EVENTS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_EVENTS_FAILURE,
            payload: error.message
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR_MESSAGE });
};
