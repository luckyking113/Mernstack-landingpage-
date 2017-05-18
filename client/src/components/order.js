import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import $ from 'jquery';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Button, Modal } from 'react-bootstrap';

function make_base_auth(user, apikey) {
	    return new Buffer(user + ':' + apikey ).toString('base64');
}

export default class Order extends React.Component {
    
    state = {
        open: false,
        isShowModal : false,
        show : false
    };
    handleOpen = () => {        
        this.setState({open: true});        
    };

    handleClose = () => {        
        this.setState({open: false});        
    };
    getInitialState = () => {
        return {
            type: 'info',
            message: '',
            show : false
        };
    };

    handleSubmit = () => {
        event.preventDefault();
        this.handleOpen();
        this.sendFormData();
    };
    /**
     * Submits form data to the web server.
     */
    sendFormData = () => {
        // Prepare form data for submitting it.
        var _this = this;
        var formData = {
            name: ReactDOM.findDOMNode(this.refs.name).value,
            where: ReactDOM.findDOMNode(this.refs.where).value,
            phone: ReactDOM.findDOMNode(this.refs.phone).value,
            email: ReactDOM.findDOMNode(this.refs.email).value
        };

        var fname = formData.name;
        var lname = formData.where;
        var phonenum = formData.phone;
        var emailadr = formData.email;
        var data = {
            'email_address': formData.email,
            'status': 'subscribed',
            'merge_fields': {
                'FNAME': fname.substring(0, fname.indexOf(' ')),
                'LNAME': 'abc'
            }
        };

        // Send the form data.

        var settings = {
            "url": "https://us15.api.mailchimp.com/3.0/lists/6824111615/members/",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "authorization": "Basic dXNlcjo2MDU5ODFjOTUxMWM5OTYxNGJiNzAzNDQxM2U2Yzk4ZC11czE1",
            },
            "data" : data
        }

        
        
        // ============= If Ajax call success  =============================
        // $.ajax(settings).done(function (response) {
        //     //_this.setState({isShowModal : true})   ;
        //     this.setState({ show: true});
        //     var url = 'http://localhost:5000/api/signup'
        //     const request = new Request(url, {
        //         method: 'POST',
        //         headers: new Headers({
        //             'Content-Type': 'application/json',
        //             'Access-Control-Allow-Origin' : '*'                
        //         }),
        //         body: JSON.stringify(formData)
        //     });
        //     return fetch(request).then(response => {
        //             return response.json();
        //     }).catch(error => {
        //         return error;
        //     });
        // });

        // ============= /If Ajax call success  =============================
            
            this.setState({ show: true});
            var url = 'http://localhost:5000/api/signup';
            const request = new Request(url, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin' : '*'                
                }),
                body: JSON.stringify(formData)
            });
            return fetch(request).then(response => {
                    return response.json();
            }).catch(error => {
                return error;
            });
    }
  
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];

     let close = () => this.setState({ show: false});
        return (
            <div id="order" className="order">
                <div className="container">
                    <h2><b>Order a video</b></h2>
                    <hr />
                    <div className="photeFrame">
                        <div className="formWidht">
                            <div className="orderForm">
                                <form action="" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name"> What's your name? </label>
                                        <input className="form-control" name="name" ref="name" required type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="where">Where did you go?</label>
                                        <input className="form-control" name="where" ref="where" required type="text" />
                                    </div>
                                    <div >
                                        <label>How can we reach you?<br /></label>
                                        <div className="email-group">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone&nbsp;&nbsp;</label>
                                                <input className="form-control" name="phone" ref="phone" required type="phone" />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="phone">Email&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                                <input className="form-control" name="phone" ref="email" required type="email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <Button className="btn btn-defaults" type="submit" bsStyle="primary" bsSize="large">
                                                SUBMITS
                                                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                            </Button>
  
                                        </div>
                                    </div>
                                </form>
                                    <div className="modal-container">                                           
                                        <Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
                                        </Modal>
                                    </div>                            
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
