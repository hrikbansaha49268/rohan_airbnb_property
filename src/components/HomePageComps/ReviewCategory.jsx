import React from 'react';
import { FaStar } from "react-icons/fa";

const ReviewCategory = ({ topic, rating, TopicIcon }) => {
    return (
        <div className='flex flex-col justify-center gap-y-2 border-l-2 pl-4 py-4'>
            <p className='text-[#3c3c3c] font-inter font-medium text-lg'>{topic}</p>
            <div className="flex gap-x-2 items-center">
                <p className='font-inter font-medium text-sm'>{rating}</p>
                <FaStar size={8} />
            </div>
            <TopicIcon size={32} />
        </div>
    );
};

export default ReviewCategory