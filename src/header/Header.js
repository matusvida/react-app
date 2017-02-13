/**
 * Created by Matus on 11.12.2016.
 */
import React from 'react';
import '../css/App.css';
import logo from './logo.svg';

var Header = React.createClass({
    getInitialState(){
        return {
            focused: 0
        };
    },

    clicked(index){
        this.setState({focused: index});
    },

    render(){
        var self = this;
        return (
             <div className="Header-header">
                 <img src={logo} className="Header-logo" alt="TODO LIST logo"/>
                 <h2 className="welcome-title">Welcome {this.props.name} to my first ReactJS application</h2>
                 <div className="header-menu">
                     <ul>
                         {self.props.items.map(function(m, index){
                             var style = '';
                             if(self.state.focused === index){
                                 style = 'focused';
                             }
                             return <li className={style} onClick={self.clicked.bind(self,index)}><a href={}>{m}</a></li>;
                         })}
                     </ul>
                     <p>Selected: {this.props.items[this.state.focused]}</p>
                 </div>
             </div>
        );
    }
});

export default Header;


