import React, {Component} from "react";
import './TextBar.css';

export default class TextBar extends Component {
    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    sendMessage () {
        if(this.input.current.value === null || this.input.current.value === ''){
            alert("input cannot be empty"); return;
        }
        this.props.onSend && this.props.onSend(this.input.current.value);
        this.input.current.value = '';
    }
    sendMessageOnPressEnter (e) {
        if(e.keyCode===13){
            this.sendMessage();
        }
    }
    render() {
        const sendMessage = this.sendMessage.bind(this);
        const sendMessageIfEnter = this.sendMessageOnPressEnter.bind(this);

        return(
            <div className="textbar">
                <input className="textbar-input" type="text" ref={this.input} onKeyDown={sendMessageIfEnter}/>
                <button className="textbar-send" onClick={sendMessage}>
                    {this.props.buttonText}
                </button>
            </div>
        );
    }
}