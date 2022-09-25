import {
    ALL_EVENTS_REQUEST,
    ALL_EVENTS_SUCCESS,
    ALL_EVENTS_FAIL,
} from '../constants/eventsConst.js';

export const getAllEventsReducer = (state = { events: [] }, action) => {
    switch (action.type) {
        case ALL_EVENTS_REQUEST:
            return {
                loading: true,
                events: [],
            };
        case ALL_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.payload,
            };
        case ALL_EVENTS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
