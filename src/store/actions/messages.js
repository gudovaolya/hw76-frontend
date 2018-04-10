import axios from '../../axios-api';
import {CREATE_MESSAGE_ERROR, CREATE_MESSAGE_SUCCESS, GET_MESSAGES_SUCCESS} from "./actionTypes";

export const getMessagesSuccess = (messages) => {
    return { type: GET_MESSAGES_SUCCESS, messages}
};

export const getMessages = () => {
    return dispatch => {
        axios.get('/messages').then(response => {
            dispatch(getMessagesSuccess(response.data))
        })
    }
};

export const createMessageSuccess = () => {
    return {type: CREATE_MESSAGE_SUCCESS}
};

export const createMessageError = (error) => {
    return {type: CREATE_MESSAGE_ERROR, error}
};

export const createMessage = (messageData) => {
    return dispatch => {
       return axios.post('/messages', messageData).then(response => {
            dispatch(createMessageSuccess())
        }).catch(error => {
            if (error.response.status === 400) {
                dispatch(createMessageError(error.response.data.error))
            }
       });
    }
};


