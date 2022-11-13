import React from 'react';
import image from '../../assets/images/chair.png'
import bgimage from '../../assets/images/bg.png'
import PrimaryBtn from '../../Components/PrimaryBtn';

const Banner = () => {
    return (
        <div className="hero mb-20 mt-10" style={{ backgroundImage: `url(${bgimage})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="rounded-lg shadow-2xl lg:w-1/2" alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-black">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;