import {
    CREATE_MESSAGE_ERROR, CREATE_MESSAGE_SUCCESS, GET_MESSAGES_SUCCESS
} from "../actions/actionTypes";

const initialstate = {
    messages: [],
    error: null
};

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
            const sortMessages = action.messages.sort((a, b) => {
               return new Date (b.datetime) - new Date (a.datetime);
            });
            return {...state, messages: sortMessages};
        case CREATE_MESSAGE_SUCCESS:
            return {...state, error: null};
        case CREATE_MESSAGE_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default reducer;