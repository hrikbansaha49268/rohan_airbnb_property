import React from 'react';
import { IoMdGlobe } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className='flex justify-around py-8 text-white bg-black font-inter'>
            <div className='flex items-center gap-x-4'>
                <p>&#169; 2024</p>
                <LuDot />
                <p className='hover:underline underline-offset-1 cursor-pointer'>Feel like home</p>
                <LuDot />
                <p className='hover:underline underline-offset-1 cursor-pointer'>Terms and conditions</p>
            </div>
            <div className="flex items-center gap-x-16">
                <div className='flex items-center gap-x-2'>
                    <IoMdGlobe />
                    <p>English (IN)</p>
                </div>
                <div className='flex items-center gap-x-4'>
                    <FaFacebook />
                    <FaInstagram />
                </div>
            </div>
        </footer>
    )
}

export default Footer