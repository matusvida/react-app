/**
 * Created by Matus on 23.01.2017.
 */
import React, {Component} from 'react';
import '../css/App.css'
// import axios from 'axios';
import $ from 'jquery';

class Form extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: ''
        };

        this.updateState = this.updateState.bind(this);
        this.submit = this.submit.bind(this);
    }
    submit (e){
        e.preventDefault()

        // var data = {
        //     name: this.state.name
        // }

        // Submit form via jQuery/AJAX
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/trainingApp/',
            crossDomain: true,
            data: {"name": JSON.stringify(this.state.name)},
            dataTpe: 'jsonp'
        })
            .done(function(name) {
                // self.clearForm()
                console.log(name);
            })
            .fail(function(jqXhr) {
                console.log('failed to register');
            });

    }
    updateState(e) {
        this.setState({
            name: e.target.value
        });
        console.log(this.state.name);


    }

    render(){
        return(
          <form onSubmit={this.submit}>
              <input type="text" value={this.state.name} onChange={this.updateState}/>
              <button type="submit">Submit</button>
          </form>
        );
    }
}

export default Form;
