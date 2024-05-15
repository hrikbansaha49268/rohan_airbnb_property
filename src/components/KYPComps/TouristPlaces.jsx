import React from 'react';

const TouristPlaces = () => {
    return (
        <section id='attractions' className='mx-auto container font-inter'>
            <h3 className='font-bold text-3xl text-center mb-8'>
                Tourist Spots Nearby
            </h3>
            <div className="grid grid-cols-3 w-fit mx-auto gap-9">
                <div className='flex flex-col gap-y-4'>
                    <img
                        className='w-[323px] h-[308px] object-cover drop-shadow-md rounded-md'
                        src={window.location.origin + '/assets/lake.jpg'}
                        alt="Image 1"
                    />
                    <p className='text-center font-semibold text-xl'>Dhakuria Lake</p>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <img
                        className='w-[323px] h-[308px] object-cover drop-shadow-md rounded-md'
                        src={window.location.origin + '/assets/hall.jpg'}
                        alt="Image 1"
                    />
                    <p className='text-center font-semibold text-xl'>Victoria Memorial Hall</p>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <img
                        className='w-[323px] h-[308px] object-cover drop-shadow-md rounded-md'
                        src={window.location.origin + '/assets/riverside.jpg'}
                        alt="Image 1"
                    />
                    <p className='text-center font-semibold text-xl'>Ganga Ghat</p>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <img
                        className='w-[323px] h-[308px] object-cover drop-shadow-md rounded-md'
                        src={window.location.origin + '/assets/lake.jpg'}
                        alt="Image 1"
                    />
                    <p className='text-center font-semibold text-xl'>Dhakuria Lake</p>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <img
                        className='w-[323px] h-[308px] object-cover drop-shadow-md rounded-md'
                        src={window.location.origin + '/assets/hall.jpg'}
                        alt="Image 1"
                    />
                    <p className='text-center font-semibold text-xl'>Victoria Memorial Hall</p>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <img
                        className='w-[323px] h-[308px] object-cover drop-shadow-md rounded-md'
                        src={window.location.origin + '/assets/riverside.jpg'}
                        alt="Image 1"
                    />
                    <p className='text-center font-semibold text-xl'>Ganga Ghat</p>
                </div>
            </div>
        </section>
    );
};

export default TouristPlaces;