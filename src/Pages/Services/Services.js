import React from 'react';
import florida from '../../assets/images/fluoride.png'
import crativi from '../../assets/images/cavity.png'
import whiting from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const cards = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: florida
        },
        {
            id: 2,
            name: 'Cavity Filling',
            details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: crativi
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whiting
        },
    ]

    return (
        <div>
            <div className='text-center mt-14 mb-20'>
                <h2 className='text-2xl font-semibold text-sky-500 mb-3'>OUR SERVICES</h2>
                <h1 className='text-4xl font-bold text-gray-600'>Services We Provide</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-14'>
                {
                    cards.map(card => <Service
                        key={card.id} card={card}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;