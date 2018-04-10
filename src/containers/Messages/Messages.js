import React, {Component} from 'react';
import {connect} from "react-redux";
import {getMessages} from "../../store/actions/messages";
import Message from "../../components/Message/Message";

class Messages extends Component {

    componentDidMount() {
        this.props.onGetMessages();
    }

    transformDate = (datetime) => {
        return datetime.substr(8,2) + datetime.substr(4,4) +
            datetime.substr(0,4) + ' ' + datetime.substr(11,8)
    };

    render () {

        return (
            <div className="container content">
                <h3>Last messages:</h3>
                {this.props.messages.map(item => {
                    return(
                        <Message
                            key={item.id}
                            message={item.message}
                            author={item.author}
                            datetime={this.transformDate(item.datetime)}
                        />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.mes.messages
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetMessages: () => dispatch(getMessages())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Messages);