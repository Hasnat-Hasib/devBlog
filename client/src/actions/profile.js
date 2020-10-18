import axios from 'axios';
import {setAlart} from './alert';

import {GET_PROFILE, PROFILE_ERROR} from './types';


// Get Current user

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
             payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
} 
