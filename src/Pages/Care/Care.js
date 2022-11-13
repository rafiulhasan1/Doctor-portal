import React from 'react';
import baby from '../../assets/images/treatment.png'
import PrimaryBtn from '../../Components/PrimaryBtn';

const Care = () => {
    return (
        <div className="hero mb-14 mt-14 bg-base-100 shadow-xl">
            <div  className="hero-content flex-col lg:flex-row">
                <figure><img src={baby} className="rounded-lg shadow-2xl" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions justify-start">
                    <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;