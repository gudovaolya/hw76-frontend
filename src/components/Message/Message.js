import React from 'react';
import './Message.css';

const Message = (props) => {
    return (
        <div className="message">
            <div className="message-top">
                <span className="message-author">Author: {props.author}</span>
                <span className="message-date">Published: {props.datetime}</span>
            </div>
            <p className="message-txt">{props.message}</p>
        </div>
    )
};

export default Message;