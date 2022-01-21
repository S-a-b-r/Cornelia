import React, {Component} from 'react';
import './FifthHero.css';
import image from '../assets/images/Cornelias.png';

class FifthHero extends Component {
    render() {
        return (
            <div className='FifthHero'>
                <div className="container">
                    <div className="fifth-hero-header">Let the magic happen</div>
                    <div className="fifth-hero-text">Surround yourself with the most faithful companions and embark
                        together on fantastic new adventures! Pocket, medium or XXL format, find <br/>
                        the Cornelia that best suits your environment.<br/><br/>
                        <b>Oh, and don't worry:</b> Cornelia feeds on your bad vibes,<br/>
                        no need to give her water or grass !</div>
                </div>
                <img className='fifth-hero-image' src={image}/>
            </div>
        );
    }
}

export default FifthHero;