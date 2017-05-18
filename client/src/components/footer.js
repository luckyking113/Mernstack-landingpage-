import React from 'react';
import {Link} from 'react-router';

export default class Footer extends React.Component {
    render() {
        return (
            <div id="footer" className ="footer">                
                
                <div className ="film">  
                </div>    
                <div className ="mainFooter">  
                    <div className ="container">
                        <div>
                            <img src="src/asset/logo1.png" alt=""  />
                        </div>
                        <hr className = "footerline"/>
                        <div className="socialIcon">  
                            <i className="fa fa-facebook"></i>     
                            <i className="fa fa-twitter" aria-hidden="true"></i>   
                            <i className="fa fa-instagram" aria-hidden="true"></i>              
                        </div>
                        <hr className = "footerline1"/>
                        <div className = "footerTxt">
                            <span>
                                <p>Need some help?</p>
                                <p>Payment Options</p>
                                <p>Terms of Service</p>
                                <p>Privacy Policy</p>
                            </span>                    
                        </div>  
                    </div>
                    
                </div> 
                <div className ="film">  
                </div>                 
            </div>    
        )
    }
}