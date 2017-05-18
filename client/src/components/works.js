import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';

export default class Works extends React.Component {
    constructor() {
        super();		
        this.state = {
            data: [
                {id:'1', name: 'train', imgname: 'train.png', txtcontent: 'Go somewhere'}, 
                {id:'2', name: 'guy1', imgname: 'guy1.png', txtcontent: 'Take photos and shoot videos'},
                {id:'3', name: 'guy2', imgname: 'guy2.png', txtcontent: 'Send us your photos and videos'},
                {id:'4', name: 'guy3', imgname: 'guy3.png', txtcontent: 'Our expert video editors will make your video'},
                {id:'5', name: 'guy4', imgname: 'guy4.png', txtcontent: 'You share the video with family and friends'}
            ]
        }
    }

    worksContent() {
        return _.map(this.state.data, (datum) => {
            return(
                <div>
                    <div className={`linetop${datum.name}`}></div>
                    <div className={datum.name}>
                        <img src={`src/asset/${datum.imgname}`} alt=""/>
                        <div className ={`text${datum.name}`}>
                            <p>{datum.id}</p>
                            <h4><span className="contentID">{datum.id}.&nbsp;</span>{datum.txtcontent}</h4>
                        </div>                                            
                    </div>
                    <div className={`dotline linebottom${datum.name}`}></div>
                </div>
            );
        });
    }
    render() {
        return (
            <div id="works" className="works">
                <div className="container">
                    <h2>How it works</h2>
                    <hr />
                    {this. worksContent()}
                </div>
            </div>    
        )
    }
}