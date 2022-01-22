import React, {Component} from 'react';
import './UnicornsExists.css';
import img from '../assets/images/Frame401.png';
import logo from '../assets/images/logo-app-store1.svg';

class UnicornsExist extends Component {
    render() {
        return (
            <div className="UnicornsExist">
                <div className="container">
                    <div className="unicorns-exist-wrapper">
                        <div className="unicorns-exist-text-container">
                            <div className="app-store-logo">
                                <img src={logo}/>
                            </div>
                            <div className="unicorns-exist-header">
                                Unicorns exist
                            </div>
                            <div className="unicorns-exist-text">
                                Download our appliaction on the AppStore or the 3D model of Cornelia and meet your
                                new mascot ! Take some cool pictures of her and share it on Instagram, Twitter and
                                Facebook with <b>#CorneliaTheUnicorn !</b>
                            </div>
                            <button className='unicorns-exist-button'>Meet Cornelia in VR</button>
                        </div>
                        <div className="unicorns-exist-img-container">
                            <img src={img}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UnicornsExist;