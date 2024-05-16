import React from 'react';

const Hero = () => {
    return (
        <section className='3xl:w-[60vw] 2xl:w-[70vw] mx-auto flex flex-col gap-y-8'>
            <div className="flex justify-around h-full">
                <img
                    className='w-[323px] h-[308px] object-cover drop-shadow-md'
                    src={window.location.origin + '/assets/img1.jpg'}
                    alt="Image 1"
                />
                <div className="flex flex-col justify-between my-9">
                    <div className='font-inter font-extrabold flex flex-col space-y-2 text-[#3C3C3C]'>
                        <h1 className='text-6xl'>Cozy Stay</h1>
                        <h1 className="text-5xl tracking-wider">in Jadavpur</h1>
                    </div>
                    <button className='text-white bg-[#0F172A] font-inter font-medium text-xl py-4 rounded-md drop-shadow-md'>
                        Get a Booking
                    </button>
                </div>
                <img
                    className='w-[323px] h-[308px] object-cover drop-shadow-md'
                    src={window.location.origin + '/assets/img1.jpg'}
                    alt="Image 1"
                />
            </div>
            <div className="flex justify-around">
                <img
                    className='w-[507px] h-[318px] object-cover drop-shadow-md'
                    src={window.location.origin + '/assets/img2.jpg'}
                    alt="Image 1"
                />
                <img
                    className='w-[459px] h-[318px] object-cover drop-shadow-md'
                    src={window.location.origin + '/assets/img2.jpg'}
                    alt="Image 1"
                />
            </div>
        </section>
    )
}

export default Hero