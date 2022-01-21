import React, {Component} from 'react';
import './ThirdHero.css';
import img1 from '../assets/images/Corneliabig.svg';

class ThirdHero extends Component {
    render() {
        return (
            <div className='ThirdHero'>
                <div className="container">
                    <div className="third-hero-wrapper">
                        <div className="third-hero-content">
                            <div className="third-hero-text-1">
                                Choose <br/> your destiny
                            </div>
                            <div className="third-hero-text-2">
                                Each unicorn has its own personality and symbolism. Get to know your new mascot and surround
                                yourself with a strong ally. Thus choose the brave one and you will be able to face any
                                situation. Take the sweet Cornelia and protect your health. If you need more luck, meet
                                the Magic Cornelia! If you’re born to be bold, choose the Impetuous Cornelia : nothing will
                                defeat you. Learn more about her story
                            </div>
                            <button className='third-hero-btn'>Learn more about her story</button>
                        </div>
                        <div className="crop-container">
                            <img className='third-hero-img' src={img1}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThirdHero;