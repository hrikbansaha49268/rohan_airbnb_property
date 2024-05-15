import React from 'react';
import '../../css/extra.css';

const Hero = () => {
    return (
        <section className="mt-[72px] flex flex-col gap-y-12 relative h-fit">
            <div className="container mx-auto relative">
                <h1 className="font-inter font-extrabold text-5xl">Know your place</h1>
            </div>
            <div className="flex w-full relative h-auto">
                <img
                    className='w-3/5 h-[500px] object-cover drop-shadow-md'
                    src={window.location.origin + '/assets/house_img1.jpg'}
                    alt="Image 1"
                />
                <img
                    className='w-1/2 h-[500px] z-10 object-cover drop-shadow-md absolute right-0 top-16'
                    src={window.location.origin + '/assets/house_img2.jpg'}
                    alt="Image 1"
                />
            </div>
        </section>
    )
}

export default Hero