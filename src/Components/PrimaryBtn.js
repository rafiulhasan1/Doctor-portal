import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <button className="btn border-none bg-gradient-to-r from-cyan-500 to-blue-500">{children}</button>
    );
};

export default PrimaryBtn;