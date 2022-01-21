import React, {Component} from 'react';
import Logo from "./Logo";
import Navbar from "./Navbar";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-container">
                    <div className="header-wrap">
                        <Logo></Logo>
                        <Navbar></Navbar>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;