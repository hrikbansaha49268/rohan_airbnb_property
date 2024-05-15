import React from 'react';
import { FaBriefcaseMedical } from "react-icons/fa";
import { MdEmojiTransportation } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";

const Restrictions = () => {
    return (
        <section className='font-inter flex flex-col items-center container gap-y-9 border-b pb-32'>
            <h3 className='font-medium text-3xl border-b w-fit px-12 pb-2'>Do's and Don'ts</h3>
            <ol className='flex flex-col gap-y-8'>
                <li className='flex flex-col gap-y-4'>
                    <h1 className='flex items-center gap-x-6 font-semibold text-2xl'>
                        1. <span className='flex gap-x-4 items-center'><FaBriefcaseMedical /> Medical Facility</span>
                    </h1>
                    <p className='indent-10'>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>
                </li>
                <li className='flex flex-col gap-y-4'>
                    <h1 className='flex items-center gap-x-6 font-semibold text-2xl'>
                        2. <span className='flex gap-x-4 items-center'><MdEmojiTransportation />Transport Facility</span>
                    </h1>
                    <p className='indent-10'>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>
                </li>
                <li className='flex flex-col gap-y-4'>
                    <h1 className='flex items-center gap-x-6 font-semibold text-2xl'>
                        3. <span className='flex gap-x-4 items-center'><MdFoodBank /> Food Facility</span>
                    </h1>
                    <p className='indent-10'>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>
                </li>
            </ol>
        </section>
    )
}

export default Restrictions;