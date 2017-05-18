import React from 'react';
import {Link} from 'react-router';
// import '../style.css';


export default class Header extends React.Component {
    render() {
        return (
            <div id="header" className ="header">
                <div className="container-fluid">
                <h4>You travel.<br />You take photos and shoot videos.</h4>
                <h1>We help you tell your story.</h1>
                <button className="btn">ORDER<i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                </div>
            </div>    
        )
    }
}