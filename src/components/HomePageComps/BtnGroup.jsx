import React, { useState } from 'react'
import AButton from './AButton';
import { Link } from 'react-router-dom';


const BtnGroup = () => {

    const [showBookingDropDown, setShowBookingDropDown] = useState(false);
    const [showEnquiryDropDown, setShowEnquiryDropDown] = useState(false);

    return (
        <section className='w-[60vw] mx-auto flex justify-around'>
            <div className="flex flex-col gap-y-4 relative">
                <AButton
                    onClick={() => setShowBookingDropDown(!showBookingDropDown)}>
                    <div className='flex items-center gap-x-16 mx-auto w-fit'>
                        <p>Booking</p>
                        <img
                            className={`w-3 h-4 ${showBookingDropDown ? "rotate-180" : "rotate-0"} duration-300 ease-in-out`}
                            src={window.location.origin + '/assets/arrow.svg'}
                            alt="Image 1"
                        />
                    </div>
                </AButton>
                <div className={`z-10 absolute top-12 w-full mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-inter 
                ${showBookingDropDown ? "delay-100 ease-in-out visible" : "delay-100 ease-in-out hidden"}`}>
                    <a href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 duration-300 ease-in-out border-b border-gray-200 bg-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0">
                        Account settings
                    </a>
                    <a href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 duration-300 ease-in-out border-b border-gray-200 bg-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1">
                        Support
                    </a>
                    <a href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 duration-300 ease-in-out bg-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2">
                        License
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 relative">
                <AButton
                    onClick={() => setShowEnquiryDropDown(!showEnquiryDropDown)}>
                    <div className='flex items-center gap-x-16 mx-auto w-fit'>
                        <p>Enquiry</p>
                        <img
                            className={`w-3 h-4 ${showEnquiryDropDown ? "rotate-180" : "rotate-0"} duration-300 ease-in-out`}
                            src={window.location.origin + '/assets/arrow.svg'}
                            alt="Image 1"
                        />
                    </div>
                </AButton>
                <div className={`z-10 absolute top-12 w-full mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-inter 
                ${showEnquiryDropDown ? "delay-100 ease-in-out visible" : "delay-100 ease-in-out hidden"}`}>
                    <a href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 duration-300 ease-in-out border-b border-gray-200 bg-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0">
                        Account settings
                    </a>
                    <a href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 duration-300 ease-in-out border-b border-gray-200 bg-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1">
                        Support
                    </a>
                    <a href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 duration-300 ease-in-out"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2">
                        License
                    </a>
                </div>
            </div>
            <Link to="/kyp">
                <AButton>
                    Know your place
                </AButton>
            </Link>
            <Link to="/kyh">
                <AButton>
                    Know your host
                </AButton>
            </Link>
        </section>
    );
};

export default BtnGroup;