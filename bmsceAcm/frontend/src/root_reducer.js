import { combineReducers } from "redux";

import {
    getAllEventsReducer,
} from "./reducers/eventsRed.js";

const rootReducer = combineReducers({
    getAllEvents: getAllEventsReducer,
});

export default rootReducer;