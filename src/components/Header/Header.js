import React from 'react';
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import './Header.css';


export default function Header() {
  return <div className="header">
  <div className="header-container">
      <div className="header-wrap">
          <Logo></Logo>
          <Navbar></Navbar>
      </div>
  </div>
</div>;
}
