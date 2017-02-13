/**
 * Created by Matus on 12.02.2017.
 */
import React, {Component} from 'react';
import Button from "../body/Button";


class Home extends Component{

    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
        // this.submit = this.submit.bind(this);
    }
    click(){

    }

    render(){
        return(
            <div>
                <Button styles="add-btn"/>
            </div>
        );
    }
}

export default Home;