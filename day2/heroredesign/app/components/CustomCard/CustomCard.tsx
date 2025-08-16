import Image from 'next/image'
import React from 'react'

const CustomCard = () => {
    return (
        <div className='w-96 h-full rounded-2xl bg-white font-sans shadow-lg'>
            {/* //container */}
            <div className='p-6 space-y-4'>
                <div className='font-sans font-bold tracking-tighter text-neutral-700 text-center text-2xl'>
                    🎉 Your Order is Completed
                </div>

                <div className='flex items-center justify-between border-gray-300 shadow-sm border rounded-lg p-4'>
                    <Image
                        src={"/shirt.jpg"}
                        height={120}
                        width={120}
                        alt='shirt-logo'
                        className='bg-orange-300 rounded-md mr-4'
                    />
                    <div className='flex-grow'>
                        <div className='space-y-2'>
                            <div className='bg-neutral-300 w-40 h-4 rounded-lg'></div>
                            <div className='bg-neutral-300 w-20 h-4 rounded-lg'></div>
                            <div className='font-semibold text-green-600 text-lg mt-4'>
                                $15
                            </div>
                            <div className='text-neutral-600 font-medium tracking-tight'>
                                Quantity: <span className='font-bold text-black'>1</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center space-y-2'>
                    <button className='w-full tracking-tighter text-orange-400 bg-orange-200 rounded-full p-2 text-sm hover:underline'>
                        Edit your Order
                    </button>
                    <div className='text-neutral-600 tracking-tighter text-sm mt-2'>
                        You have <span className='text-orange-400'>29 minutes</span> to edit
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomCard
