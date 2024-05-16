import React from 'react';
import ReviewItem from './ReviewItem';

const CustomerReviews = () => {
    return (
        <section className='mx-auto 3xl:w-[60vw] 2xl:w-[70vw] flex flex-col gap-y-16'>
            <p className='font-inter text-[#0F172A] font-extrabold text-4xl'>
                Our Reviews
            </p>
            <div className="grid grid-cols-2 gap-y-24 gap-x-48 mx-auto">
                <ReviewItem
                    starsRecieved={4}
                    customerName="John Smith"
                    location="New York, USA"
                    time="1 week ago"
                    profileImgPath="/assets/profile.jpg"
                    comment="The king, seeing how much happier his subjects were, realized the error of his ways and repealed."
                />
                <ReviewItem
                    starsRecieved={4}
                    customerName="John Smith"
                    location="New York, USA"
                    time="1 week ago"
                    profileImgPath="/assets/profile.jpg"
                    comment="The king, seeing how much happier his subjects were, realized the error of his ways and repealed."
                />
                <ReviewItem
                    starsRecieved={4}
                    customerName="John Smith"
                    location="New York, USA"
                    time="1 week ago"
                    profileImgPath="/assets/profile.jpg"
                    comment="The king, seeing how much happier his subjects were, realized the error of his ways and repealed."
                />
                <ReviewItem
                    starsRecieved={4}
                    customerName="John Smith"
                    location="New York, USA"
                    time="1 week ago"
                    profileImgPath="/assets/profile.jpg"
                    comment="The king, seeing how much happier his subjects were, realized the error of his ways and repealed."
                />
                <ReviewItem
                    starsRecieved={4}
                    customerName="John Smith"
                    location="New York, USA"
                    time="1 week ago"
                    profileImgPath="/assets/profile.jpg"
                    comment="The king, seeing how much happier his subjects were, realized the error of his ways and repealed."
                />
                <ReviewItem
                    starsRecieved={4}
                    customerName="John Smith"
                    location="New York, USA"
                    time="1 week ago"
                    profileImgPath="/assets/profile.jpg"
                    comment="The king, seeing how much happier his subjects were, realized the error of his ways and repealed."
                />
            </div>
        </section>
    );
};

export default CustomerReviews;