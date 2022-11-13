import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import bgdoctor from '../../assets/images/appointment.png'
import PrimaryBtn from '../../Components/PrimaryBtn';

const Appoiment = () => {
    return (
        <section className='mt-64 mb-32' style={{ backgroundImage:`url(${bgdoctor})`}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <img src={doctor} className="-mt-36 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='p-5'>
                        <h3 className='text-lg text-blue-400'>Appointment</h3>
                        <h1 className="text-5xl font-bold text-white" >Make an appointment Today!</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>Appoment</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appoiment;