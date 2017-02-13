/**
 * Created by Matus on 05.02.2017.
 */
import React, {Component} from 'react';

class Button extends Component{

    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this);
    }
    clicked(){
        alert("funguje");
    }

    render(){
        return(
            <span className="add-btn" onClick={this.clicked}>+</span>
        );
    }
}

export default Button;


