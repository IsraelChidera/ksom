import Image from 'next/image'
import React from 'react'
import RecentApplications from '../components/widgets/Dashboard/RecentApplications'

const page = () => {
    return (
        <main className='py-[32px] px-5 lg:px-[40px] bg-[#f9f9f9]'>
            <h1 className='text-[28px] text-text font-bold mb-[24px]'>Overview</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-[10px] lg:gap-[20px]'>
                <div className='bg-white rounded-[16px] px-[16px] py-[24px]'>
                    <Image src="/user2.png" alt="users icon" width={48} height={48} />

                    <p className='mt-4 font-semibold text-[22px] text-[#1A1A1A]'>0</p>
                    <p className='mt-2 font-medium text-base text-[#757577]'>Total Applicants</p>
                </div>

                <div className='bg-white rounded-[16px] px-[16px] py-[24px]'>
                    <Image src="/user2.png" alt="users icon" width={48} height={48} />

                    <p className='mt-4 font-semibold text-[22px] text-[#1A1A1A]'>0</p>
                    <p className='mt-2 font-medium text-base text-[#757577]'>Admitted Applicants</p>
                </div>

                <div className='bg-white rounded-[16px] px-[16px] py-[24px]'>
                    <Image src="/user2.png" alt="users icon" width={48} height={48} />

                    <p className='mt-4 font-semibold text-[22px] text-[#1A1A1A]'>0</p>
                    <p className='mt-2 font-medium text-base text-[#757577]'>Pending Applicants</p>
                </div>

                <div className='bg-white rounded-[16px] px-[16px] py-[24px]'>
                    <Image src="/user2.png" alt="users icon" width={48} height={48} />

                    <p className='mt-4 font-semibold text-[22px] text-[#1A1A1A]'>0</p>
                    <p className='mt-2 font-medium text-base text-[#757577]'>Rejected Applicants</p>
                </div>
            </div>

            {/* Recent Applications */}
            <RecentApplications />
        </main>
    )
}

export default page