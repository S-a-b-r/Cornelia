import React, {Component} from 'react';
import './SecondHero.css';

class SecondHero extends Component {
    render() {
        return (
            <div className='SecondHero'>
                <div className="container">
                    <div className="second-hero-wrapper">
                        <div className="second-hero-text-1">
                            Toward infinity
                            and beyond
                        </div>
                        <div className="second-hero-text-2">
                            Discover your new favourite mascot. With her, boost your imagination and decorate your
                            workspace. May Cornelia accompany you in your daily life and in the most perilous
                            missions you may encounter.
                            <br/>
                            <br/>
                            With her, give yourself the means to succeed, <b>believe in yourself and in your dreams!</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondHero;