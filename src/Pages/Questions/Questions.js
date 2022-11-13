import React from 'react';
import ques from '../../assets/icons/quote.svg'

const Questions = () => {
    return (
        <div className='flex justify-between'>
            <div className='p-5'>
                <h3 className='text-xl text-blue-400 mb-5'>Testimonial</h3>
                <h1 className='text-3xl text-gray-500'>What Our Patients Says</h1>
            </div>
            <div>
                <img className='w-1/2 ml-32' src={ques} alt="" />
            </div>
        </div>
    );
};

export default Questions;