import React from 'react';
import img from '../../assets/images/Ellipse26.png';
import './ReviewCard.css';

function ReviewCard(props) {
  return <div className='ReviewCard'>
  <div className="card-text">
      {props.text}
  </div>
  <div className="card-author">
      <div className="author-img">
          <img src={img}/>
      </div>
      <div className="author-description">
          <div className="author-name">
                  {props.name}
          </div>
          <div className="author-job">
              {props.job}
          </div>
      </div>
  </div>
</div>;
}

ReviewCard.propTypes = {};

export default ReviewCard;
