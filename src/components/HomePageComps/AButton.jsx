import React from 'react';

const AButton = (props) => {
    return (
        <button
            onClick={props.onClick}
            className='bg-black text-white w-52 h-12 rounded-md font-inter font-medium text-sm drop-shadow-md'>
            {props.children}
        </button>
    );
};

export default AButton;