import React from 'react';
import './StartHero.css';
import image from '../../assets/images/1.svg';


export default function StartHero() {
  return <div className="StartHero">
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
</div>;
}
