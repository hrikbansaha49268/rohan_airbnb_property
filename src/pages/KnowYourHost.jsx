import React from 'react';
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaArrowLeft } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const KnowYourHost = () => {
    return (
        <main className='flex flex-col gap-y-32 font-inter mb-32'>
            <div className="flex w-full justify-between">
                <img className='w-[400px] h-[400px] object-cover object-right drop-shadow-md rounded-br-[100px]'
                    src={window.location.origin + '/assets/host_profile.jpg'}
                    alt="Image 1"
                />
                <div className="flex w-1/2 justify-between container mt-16">
                    <div className="flex flex-col gap-y-[72px]">
                        <h1 className='font-extrabold text-5xl'>Know your host</h1>
                        <div className="flex flex-col gap-y-12">
                            <h2 className='font-bold text-3xl border-b border-black w-fit pr-6'>
                                About Rohan
                            </h2>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex gap-x-2 items-baseline">
                                    <FaBirthdayCake />
                                    <p className='font-normal text-xl'>Born on '99</p>
                                </div>
                                <div className="flex gap-x-2 items-baseline">
                                    <FaUniversity />
                                    <p className='font-normal text-xl'>Alumnus of Jadavpur University</p>
                                </div>
                                <div className="flex gap-x-2 items-baseline">
                                    <MdBusinessCenter />
                                    <p className='font-normal text-xl'>My work: Business Center</p>
                                </div>
                                <div className="flex gap-x-2 items-baseline">
                                    <FaHome />
                                    <p className='font-normal text-xl'>Lives in Kolkata, India</p>
                                </div>
                            </div>
                            <p className='text-base text-[#4A4A4A] leading-7  tracking-tight font-normal'>
                                Hi, my name is Rohan Ganguly. I stay in Kolkata, West Bengal. I am a businessman. I’m running an Organization named World Martial Arts Committee (WMAC). I’m open minded guy. Feel free to talk.
                            </p>
                        </div>
                    </div>
                    <Link
                        to="/"
                        className="goHomeBtn flex gap-x-2 items-center font-inter text-base font-normal text-[#5e5e5e] border-2 text-center justify-center w-32 h-10 rounded-md hover:bg-[#5e5e5e] hover:text-white peer duration-300 ease-in-out hover:scale-105 px-8">
                        <IconContext.Provider value={{ color: "#5e5e5e", className: "left-arrow" }}>
                            <FaArrowLeft size={16} />
                        </IconContext.Provider>
                        Home
                    </Link>
                </div>
            </div>
            <div className='flex justify-between w-3/4 pl-[72px]'>
                <div className='flex flex-col gap-y-6 w-1/2'>
                    <p className='font-black text-6xl'>Rohan Ganguly</p>
                    <div className="flex items-baseline gap-x-3">
                        <FaHeart size={20} /><p className='font-semibold text-2xl'>SuperHost</p>
                    </div>
                    <div className="flex gap-x-4">
                        <div className='flex flex-col items-center border-r-2 pr-4 py-4'>
                            <p className='font-black text-6xl'>83</p>
                            <p className='font-medium text-xl'>Reviews</p>
                        </div>
                        <div className='flex flex-col items-center py-4'>
                            <p className='font-black text-6xl'>83</p>
                            <p className='font-medium text-xl'>Reviews</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-y-6'>
                    <p className='font-bold text-4xl'>You can ask me about</p>
                    <div className="flex flex-wrap gap-6">
                        <p className='text-[#9E9E9E] border border-[#9e9e9e] px-16 py-3 rounded-full'>Films</p>
                        <p className='text-[#9E9E9E] border border-[#9e9e9e] px-16 py-3 rounded-full'>Karate</p>
                        <p className='text-[#9E9E9E] border border-[#9e9e9e] px-16 py-3 rounded-full'>Films</p>
                        <p className='text-[#9E9E9E] border border-[#9e9e9e] px-16 py-3 rounded-full'>Films</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default KnowYourHost;;