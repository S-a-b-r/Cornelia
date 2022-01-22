import React, {Component} from 'react';
import './End.css';
import logoFigma from '../assets/images/Figma-logo1.svg';
import logoSketch from '../assets/images/850px-Sketch_Logo1.svg';

class End extends Component {
    render() {
        return (
            <div className='End'>
                <div className="container">
                    <div className="end-wrapper">
                        <div className="end-container">
                            <div className="end-header">
                                Get started with<br/>
                                Cornelia today
                            </div>
                            <div className="end-buttons">
                                <button className='end-btn'>
                                    <img src={logoFigma}/>
                                    <div className="btn-text">
                                        Download for <br/>
                                        <b>Figma</b>
                                    </div>
                                </button>
                                <button className='end-btn' style={{marginLeft : 68}}>
                                    <img src={logoSketch}/>
                                    <div className="btn-text">
                                        Download for <br/>
                                        <b>Sketch</b>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="by-cornelia">
                            <div className="end-cornelia-header">
                                Cornelia
                            </div>
                            Design & Development
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default End;