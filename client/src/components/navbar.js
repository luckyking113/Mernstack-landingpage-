import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {
    constructor(){
        super();
        this.state ={
            flag: true
        }
    }
    componentDidMount() { 
         window.addEventListener('scroll', this.navbarControl);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.navbarControl);
    }

    navbarControl(){        
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } 
        else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }  
    }

    mobilemenu = ()=>{         
        if (this.state.flag) {
            $(".navbar-fixed-top").addClass("mobile-nav");
            $(".navbar-collapse").addClass("mobile-nav"); 
            $(".icon-bar1").addClass("bar1"); 
            $(".icon-bar2").addClass("bar2"); 
            $(".icon-bar3").addClass("bar3"); 
            
        }
        else {
            $(".navbar-fixed-top").removeClass("mobile-nav");
            $(".navbar-collapse").removeClass("mobile-nav");   
            $(".icon-bar1").removeClass("bar1"); 
            $(".icon-bar2").removeClass("bar2"); 
            $(".icon-bar3").removeClass("bar3"); 
        }
        this.setState((prevState)=>{
            return{
                flag: !prevState.flag
            }
        });        
    }

    animateAndScroll(e) {
		$('html, body').animate({
			scrollTop: $(e.target.id).offset().top
		}, 1000);
	}

    render() {        
        return (
            <div className="navbar navbar-default navbar-fixed-top" role="navigation" id="myNavbar">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle"  onClick = {this.mobilemenu} data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar icon-bar1"></span>
                            <span className="icon-bar icon-bar2"></span>
                            <span className="icon-bar icon-bar3"></span>
                        </button>
                        <a className="navbar-brand"><img id="#header" src="src/asset/logo.png"  onClick={this.animateAndScroll} className="logo" /></a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a id="#works" onClick={this.animateAndScroll}>How it Works</a></li>
                            <li><a id="#order" onClick={this.animateAndScroll}>Order</a></li>
                            <li><a id="#about" onClick={this.animateAndScroll}>About</a></li>
                            <li><a id="#faq" onClick={this.animateAndScroll}>FAQ</a></li> 
                            <li>
                                <div className="socialIcon">  
                                    <i className="fa fa-facebook"></i>     
                                    <i className="fa fa-twitter" aria-hidden="true"></i>   
                                    <i className="fa fa-instagram" aria-hidden="true"></i>              
                                </div>
                            </li>                
                        </ul>
                    </div>
                </div>                
                {this.props.children}
            </div>    
        )
    }
}