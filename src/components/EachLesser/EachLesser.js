import React, {Component} from 'react';
import './EachLesser.css';
import img from '../assets/images/Circles.png';

class EachLesser extends Component {
    render() {
        return (
            <div className='EachLesser'>
                <div className="container">
                    <div className="each-lesser-wrapper">
                        <div className="each-lesser-image-container">
                            <img src={img}/>
                        </div>
                        <div className="each-lesser-text-container">
                            <div className="each-lesser-header">
                                Each lesser
                                detail matter
                            </div>
                            <div className="each-lesser-text">
                                Cornelia is an all-in-one tool that helps teams design
                                every part of the product experience. Download and get to a functional prototype faster
                                than ever.
                            </div>
                            <button className="each-lesser-button">Discover Cornelia</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EachLesser;