import React from 'react';

const Description = () => {
    return (
        <section className='font-inter relative container mx-auto border-y px-8 py-16 flex flex-col gap-y-12'>
            <div className="flex flex-col gap-y-4">
                <h4 className='font-bold text-xl'>The people of the kingdom</h4>
                <p className='font-normal text-sm leading-6 -tracking-normal text-[#3c3c3c]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="flex flex-col gap-y-4 items-center">
                <h4 className='font-bold text-xl'>The people of the kingdom</h4>
                <p className='font-normal text-sm leading-6 -tracking-normal text-[#3c3c3c] text-center'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </section>
    );
};

export default Description;