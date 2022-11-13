import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const People = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-14 mt-16 mb-32'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body" >
                    <p className='mb-6'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex justify-around items-center'>
                        <img src={people1} alt="" />
                        <div>
                            <h1 className='text-xl text-gray-500 font-bold'>Winson Herry</h1>
                            <h4>California</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body" >
                    <p className='mb-6'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex justify-around items-center'>
                        <img src={people2} alt="" />
                        <div>
                            <h1 className='text-xl text-gray-500 font-bold'>Olivia</h1>
                            <h4>California</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body" >
                    <p className='mb-6'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex justify-around items-center'>
                        <img src={people3} alt="" />
                        <div>
                            <h1 className='text-xl text-gray-500 font-bold'>Charlotte</h1>
                            <h4>California</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default People;