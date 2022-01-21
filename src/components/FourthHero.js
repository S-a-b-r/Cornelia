import React, {Component} from 'react';
import './FourthHero.css';
import image1 from '../assets/images/Frame116.png'
import image2 from '../assets/images/Frame108.png'
import imageMouse from '../assets/images/Group103.svg'

class FourthHero extends Component {
    render() {
        return (
            <div className='FourthHero'>
                <div className="container">
                    <div className="fourth-hero-wrapper">
                        <div className="fourth-hero-container-1">
                            <img className='fourth-hero-image-1' src={image1}/>
                            <div className="fourth-hero-text-container-1">
                                <div className="fourth-hero-head-1">
                                    Always<br/>
                                    Go futher
                                </div>
                                <div className="fourth-hero-text-1">
                                    Decline Cornelia as you wish! Black, dark grey, white, light grey, prussian blue ...<br/>
                                    Choose your colour, size and characteristics! And if that's not enough, personalise
                                    it to make it unique, in your own image. So open up the field of possibilities,
                                    the world is yours !
                                </div>
                                <div className='fourth-hero-container-scroll'>
                                    <img src={imageMouse}/>
                                    <span className='fourth-hero-text-scroll'>SCROLL TO KNOW MORE</span>
                                </div>
                            </div>
                        </div>
                        <div className="fourth-hero-container-2">
                            <div className="fourth-hero-text-container-2">
                                <div className="fourth-hero-head-2">
                                    Premium
                                    3D Quality
                                </div>
                                <div className="fourth-hero-text-2">
                                    Now the difference between a unicorn and a pegasus is quite clear a unicorn has a
                                    horn which usually stores their magically powers while a pegasus can only fly with
                                    its gorgeous wings. Now the difference between a unicorn and a pegasus is quite
                                    clear a unicorn has a horn.
                                </div>
                            </div>
                            <div>
                                <img className='fourth-hero-image-2' src={image2}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default FourthHero;