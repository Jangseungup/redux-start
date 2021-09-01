import { GET_USERS_FAIL, GET_USERS_START, GET_USERS_SUCCESS } from "../actions";

const initialState = {
    loding: false,
    data: [],
    error: null,
};

export default function users(state= initialState, action) {
    if(action.type === GET_USERS_START) {
     return{   
            ...state,
            loding: true,
            error: null,
        };
    }
    if (action.type === GET_USERS_SUCCESS) {
        console.log("???")
        return {
            ...state,
            loding: false,
            data: action.data,
        };
    }
    if (action.type === GET_USERS_FAIL) {
        return {
            ...state,
            loding: false,
            error: action.error,
        };
    }
    return state;
}