import React from 'react';

const MapLocation = () => {
    return (
        <section className='mx-auto container flex items-center'>
            <div className='mx-auto w-full'>
                <div className="flex flex-col gap-y-4">
                    <p className='font-semibold text-3xl'>Where you'll be</p>
                    <p className='font-medium text-xl'>Jadavpur, Kolkata, West Bengal</p>
                </div>
                <iframe className='mt-12 w-full h-[60vh]'
                    src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d223.36751557607204!2d88.37454797202963!3d22.49778546025046!2m2!1f178.35526632306716!2f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x3a02713eda7c66fd%3A0x4509a12a1cd5a06c!2sKMC%20Borough%20Office%20XII%2C%20kolkata%20municipal%20corporation.!5e1!3m2!1sen!2sin!4v1715769641431!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowfullscreen="true"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
};

export default MapLocation;