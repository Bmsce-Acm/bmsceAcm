import {
    createStore,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import mainReducer from './mainReducer.js';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
    mainReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);