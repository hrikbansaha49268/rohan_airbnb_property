import React from 'react';
import ReviewCategory from './ReviewCategory';
import { GiVacuumCleaner } from "react-icons/gi";


const OverallReviews = () => {
    const topicIcons = [GiVacuumCleaner];
    return (
        <section className='w-[65vw] mx-auto flex h-fit justify-around py-6 border-y-2'>
            <div className='font-inter font-medium text-base'>
                <p className='mb-4'>Overall Reviews</p>
                <ul className='flex flex-col-reverse items-end'>
                    <li className='flex items-center gap-x-4'>
                        1.
                        <div className="w-36 bg-gray-200 rounded-full h-1.5">
                            <div className="bg-black h-full rounded-full" style={{ width: "45%" }}></div>
                        </div>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        2.
                        <div className="w-36 bg-gray-200 rounded-full h-1.5">
                            <div className="bg-black h-full rounded-full" style={{ width: "45%" }}></div>
                        </div>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        3.
                        <div className="w-36 bg-gray-200 rounded-full h-1.5">
                            <div className="bg-black h-full rounded-full" style={{ width: "45%" }}></div>
                        </div>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        4.
                        <div className="w-36 bg-gray-200 rounded-full h-1.5">
                            <div className="bg-black h-full rounded-full" style={{ width: "45%" }}></div>
                        </div>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        5.
                        <div className="w-36 bg-gray-200 rounded-full h-1.5">
                            <div className="bg-black h-full rounded-full" style={{ width: "45%" }}></div>
                        </div>
                    </li>
                </ul>
            </div>
            <ReviewCategory topic="Cleanliness" rating={4.8} TopicIcon={topicIcons[0]} />
            <ReviewCategory topic="Cleanliness" rating={4.8} TopicIcon={topicIcons[0]} />
            <ReviewCategory topic="Cleanliness" rating={4.8} TopicIcon={topicIcons[0]} />
            <ReviewCategory topic="Cleanliness" rating={4.8} TopicIcon={topicIcons[0]} />
            <ReviewCategory topic="Cleanliness" rating={4.8} TopicIcon={topicIcons[0]} />
            <ReviewCategory topic="Cleanliness" rating={4.8} TopicIcon={topicIcons[0]} />
        </section>
    );
};

export default OverallReviews