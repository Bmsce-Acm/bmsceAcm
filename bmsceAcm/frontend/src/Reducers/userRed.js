import {
    USER_REQUEST,
    USER_SUCCESS,
    NO_USER,
} from "../Constants/userconsts.js";
import { CLEAR_ERROR_MESSAGE } from '../Constants/errConsts.js';

export const userDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return {
                loading: true,
                user: {},
                isAdmin: false,
            }
        case USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                isAdmin: action.payload.is_superuser
            }
        case NO_USER:
            return {
                loading: false,
                user: {},
                message: action.payload,
                isAdmin: false
            }
        case CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
};
