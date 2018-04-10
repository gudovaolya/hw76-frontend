import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormMessage from "../../components/FormMessage/FormMessage";
import {createMessage} from "../../store/actions/messages";
import './NewMessage.css';

class NewMessage extends Component {

    createNewMessage = (messageData) => {
        this.props.onCreateMessage(messageData).then(() => {
            if (!this.props.error) {
                this.props.history.push('/');
            }
        })
    };

    render () {

        let messageError = null;
        if (this.props.error) {
           messageError = (
               <div className="message-error">{this.props.error}</div>
           )
        }
        return (
            <div className="content container">
                {messageError}
                <FormMessage
                    onSubmit={this.createNewMessage}
                />
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.mes.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateMessage: messageData => dispatch(createMessage(messageData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);