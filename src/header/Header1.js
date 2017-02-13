import React from 'react';
import '../css/App.css';
import logo from './logo.svg';
import Home from './Home';
import Training from './Training';
import Calendar from './Calendar';
import Gallery from './Gallery';
import {Link} from 'react-router'

var Header = React.createClass({
    render(){
        var self = this;
        return (
            <div>
                <div className="Header-header">
                    <img src={logo} className="Header-logo" alt="TODO LIST logo"/>
                    <h2 className="welcome-title">Welcome {this.props.name} to my first ReactJS application</h2>
                    <div className="header-menu">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/training">Training</Link></li>
                            <li><Link to="/calendar">Calendar</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                        </ul>
                    </div>
                </div>
                <div id="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default Header;
