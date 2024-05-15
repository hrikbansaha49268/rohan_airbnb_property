import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const PropertyView = () => {
    return (
        <section className='container mx-auto'>
            <p className='font-inter text-3xl font-semibold text-center mb-14'>View of the Property</p>
            <Tabs defaultValue="facade" className='w-fit mx-auto'>
                <TabsList className="w-1/2 mx-auto flex justify-around mb-14">
                    <TabsTrigger value="facade">Facade</TabsTrigger>
                    <TabsTrigger value="room">Room</TabsTrigger>
                    <TabsTrigger value="balcony">Balcony</TabsTrigger>
                    <TabsTrigger value="bathroom">Bathroom</TabsTrigger>
                </TabsList>
                <TabsContent value="facade" className="grid grid-cols-3 gap-14 mx-auto">
                    <img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo1.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo1.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo1.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo1.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo1.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo1.jpg'}
                        alt="Image 1"
                    />
                </TabsContent>
                <TabsContent value="room" className="grid grid-cols-3 gap-14 mx-auto">
                    <img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo2.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo2.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo2.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo2.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo2.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo2.jpg'}
                        alt="Image 1"
                    />
                </TabsContent>
                <TabsContent value="balcony" className="grid grid-cols-3 gap-14 mx-auto">
                    <img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo3.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo3.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo3.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo3.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo3.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo3.jpg'}
                        alt="Image 1"
                    />
                </TabsContent>
                <TabsContent value="bathroom" className="grid grid-cols-3 gap-14 mx-auto">
                    <img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo4.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo4.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo4.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo4.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo4.jpg'}
                        alt="Image 1"
                    /><img
                        className='w-[348px] h-[348px] object-cover drop-shadow-md'
                        src={window.location.origin + '/assets/demo4.jpg'}
                        alt="Image 1"
                    />
                </TabsContent>
            </Tabs>
        </section>
    );
};

export default PropertyView;