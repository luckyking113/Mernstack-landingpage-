import React from 'react';
import {Link} from 'react-router';

export default class About extends React.Component {
    render() {
        return (
            <div id="about" className="aboutUs">
                <div className = "container">
                    <h2><b>About us</b></h2>
                    <hr />
                    <p>We are San Francisco, California based team who loves to travel and believe that the best adventures are those shared with family andn friends.</p>
                </div>
            </div>    
        )
    }
}