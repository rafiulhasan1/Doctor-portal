import React from 'react';
import { FaRegClock , FaMapMarkerAlt , FaPhoneVolume  } from 'react-icons/fa';

const InformationCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-14 mb-32'>
            <div className="card w-96 bg-base-100 shadow-xl  bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="card-body  flex justify-between" >
                    <figure><FaRegClock className='w-14 h-14 text-white'></FaRegClock></figure>
                    <div className=' text-white'>
                        <h2 className="card-title">Opening Hours</h2>
                        <p>Our Office Open 9:00 AM to 5:00 PM</p>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl  bg-gradient-to-r from-gray-400 to-gray-500">
                <div className="card-body  flex justify-between" >
                    <figure><FaMapMarkerAlt className='w-14 h-14 text-white'></FaMapMarkerAlt></figure>
                    <div className=' text-white'>
                        <h2 className="card-title">Visit our location</h2>
                        <p>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl  bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="card-body  flex justify-between" >
                    <figure><FaPhoneVolume className='w-14 h-14 text-white'></FaPhoneVolume></figure>
                    <div className=' text-white'>
                        <h2 className="card-title">Contact us now</h2>
                        <p>+000 123 456789</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationCard;