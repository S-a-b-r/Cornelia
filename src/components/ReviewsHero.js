import React, {Component} from 'react';
import './ReviewsHero.css';
import ReviewCard from "./ReviewCard";
import img from '../assets/images/Rectangle11.svg';
class ReviewsHero extends Component {
    render() {
        return (
            <div className='ReviewsHero'>
                <div className="container">
                    <div className="reviews-hero-header">
                        They talk about it better than us
                    </div>
                    <div className="reviews-container">
                        <div className="col">
                            <ReviewCard text={"You\'ve saved our business! Since I invested in Cornelia I made " +
                            "over 100,000 dollars profits. Thank you so much for your help"} name={'Peter Miguer'}
                                        job={'CEO @Combinator'}/>
                            <ReviewCard text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque " +
                            "libero cras "} name={"Linda R. Huff\n"} job={"Happiness Manager @BlueSky"}/>
                            <ReviewCard text={"We can't understand how we've been living without Cornelia. We have no regrets! Since I invested in Cornelia I made over 100,000 dollars profits. Needless to say we are extremely satisfied with the results. Cornelia is the most valuable business resource we have EVER purchased. Definitely worth the investment. Not able to tell you how happy I am with Cornelia. I am so pleased with this product."}
                                        name={"Valentine Sutton\n"}
                                        job={"Product Designer @Tools"}/>
                            <ReviewCard text={"Cornelia has got everything I need. Your company is truly upstanding and is behind its product 100%. I can't say enough about Cornelia. I'm good to go."}
                                        name={"Helen Womack\n"}
                                        job={"CTO @Stoock"}/>
                        </div>
                        <div className="col">
                            <ReviewCard text={"Without Cornelia, we would have gone bankrupt by now"} name={'Sarah Ewing'}
                                        job={'Digital Manager @FullSocial'}/>
                            <ReviewCard text={"Cornelia did exactly what you said it does. I'd be lost without Cornelia. I just can't get enough of Cornelia. I want to get a T-Shirt with Cornelia on it so I can show it off to everyone. I would like to personally thank you for your outstanding product."}
                                        name={"Debra Peters\n"}
                                        job={"Product Owner @Generate"}/>
                            <ReviewCard text={"We were treated like royalty"}
                                        name={"Vida Inman"}
                                        job={"Sales Manager @UShould"}/>
                            <ReviewCard text={"I don't know what else to say. I made back the purchase price in just 48 hours! The service was excellent. Cornelia saved my business. I love Cornelia. We've seen amazing results already. Cornelia is the most valuable business resource we have EVER purchased. If you aren't sure, always go for Cornelia."}
                                        name={"John Morgan\n" }
                                        job={"CEO @FunkyToys"}/>
                        </div>
                        <div className="col">
                            <ReviewCard text={"We've seen amazing results already. Buy this now. I couldn't " +
                            "have asked for more than this. Cornelia has completely surpassed our expectations. " +
                            "I just can't get enough of Cornelia. I want to get a T-Shirt with Cornelia on it so " +
                            "I can show it off to everyone. Thanks to Cornelia, we've just launched our 5th website!" +
                            " I will let my mum know about this, she could really make use of Cornelia!" +
                                "Thanks for the great service. The service was excellent. Cornelia is worth much more" +
                            " than I paid. I would gladly pay over 600 dollars for Cornelia. We can't understand how we've " +
                            "been living without Cornelia."} name={'Larry Davis'}
                                        job={'Traffic Manager @Upside'}/>
                            <ReviewCard text={"Cornelia is both attractive and highly adaptable. Just what I was looking for. I don't always clop, but when I do, it's because of Cornelia. I love Cornelia. Great job, I will definitely be ordering again! Thank you for making it painless, pleasant and most of all hassle free! You guys rock! Thanks for the great service. The service was excellent. Cornelia is worth much more than I paid. I would gladly pay over 600 dollars for Cornelia. We can't understand how we've been living without Cornelia."}
                                        name={"Joe Lembrouille\n"}
                                        job={"Photographer @Streetz"}/>
                        </div>
                    </div>
                    <img className='reviews-hero-img' src={img}/>
                </div>
            </div>
        );
    }
}

export default ReviewsHero;