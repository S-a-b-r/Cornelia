import React from 'react';
import './Navbar.css';


export default function Navbar() {
  return <>
            <nav className='navbar'>
                <div className="navbar-wrap">
                    <ul>
                        <li className='navbar-item'>
                            <a href='#' className='navbar-link'>
                                Learn
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#' className='navbar-link'>
                                About
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#' className='navbar-link'>
                                Why
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <button className='navbar-btn'>
                                <span>Download</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            </>;
}
