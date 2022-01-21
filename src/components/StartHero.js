import React, {Component} from 'react';
import './StartHero.css';
import image from '../assets/images/1.svg';

class StartHero extends Component {
    render() {
        return (
            <div className="StartHero">
                <div className="container">
                    <div className='start-hero-text-1'>
                        Cornelia <br/>
                        is the new
                    </div>
                    <div className='start-hero-text-2'>
                        black
                    </div>
                    <img  className='img' src={image}/>
                </div>
            </div>
        );
    }
}

export default StartHero;