import React, {Component} from 'react';
import './FormMessage.css';

class FormMessage extends Component{

    state = {
        message: '',
        author: ''
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render () {
        return (
            <div className="form-block">
                <form  onSubmit={this.submitFormHandler}>
                    <div className="form-row">
                        <label>Enter your name</label>
                        <input
                            type="text"
                            name="author"
                            className="field"
                            value={this.state.author}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                    <div className="form-row">
                        <label>Enter message</label>
                        <textarea
                            name="message"
                            className="field field-area"
                            value={this.state.message}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                    <div className="form-row-btn">
                        <button className="form-btn">Send</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormMessage;