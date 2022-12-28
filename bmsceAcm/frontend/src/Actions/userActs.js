import {
    USER_REQUEST,
    USER_SUCCESS,
    NO_USER,
} from "../Constants/userconsts.js";
import { CLEAR_ERROR_MESSAGE } from '../Constants/errConsts.js';
import axios from "axios";

export const getUserDetails = () => async (dispatch) => {
    try {
        dispatch({ type: USER_REQUEST });
        let link = `http://127.0.0.1:8000/profile`;
        const { data } = await axios.get(link);
        dispatch({
            type: USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NO_USER,
            payload: "Please login"
        })
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR_MESSAGE });
};
