import Image from 'next/image'
import React from 'react'

const EmptyRecord = () => {
    return (
        <section className='pt-[80px] pb-[302px] '>
            <div className='space-y-[8px]'>
                <div className='flex justify-center'>
                    <Image className='lg:block hidden' src="/user3.png" alt="users icon" width={48} height={48} />
                    <Image className='block lg:hidden' src="/user3.png" alt="users icon" width={40} height={40} />
                </div>

                <p className='text-center font-semibold text-[17px] text-[#1A1A1A]'>No record found</p>

                <p className='text-center font-medium text-[15px] lg:text-base text-[#1a1a1a]'>
                    Your recent applications will appear here.
                </p>
            </div>
        </section>
    )
}

export default EmptyRecord