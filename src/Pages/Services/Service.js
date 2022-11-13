import React from 'react';

const Service = ({card}) => {

    const {name , details , img } = card ;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-32">
                <div className="card-body  flex justify-between" >
                    <figure><img src={img} alt="" /></figure>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;