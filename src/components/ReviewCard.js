import React, {Component} from 'react';
import img from '../assets/images/Ellipse26.png';
import './ReviewCard.css';

class ReviewCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='ReviewCard'>
                <div className="card-text">
                    {this.props.text}
                </div>
                <div className="card-author">
                    <div className="author-img">
                        <img src={img}/>
                    </div>
                    <div className="author-description">
                        <div className="author-name">
                                {this.props.name}
                        </div>
                        <div className="author-job">
                            {this.props.job}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewCard;