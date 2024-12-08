import Image from 'next/image'
import React from 'react'

const DashboardNav = () => {
    return (
        <nav className='flex items-center justify-between py-[32px] px-[40px] border-b border-b-[#D9D9D9]'>
            <form>
                <input 
                    type="text" 
                    className='relative w-[472px] px-[16px] py-[12px] rounded-[24px] opacity-70 border border-[#757577]' 
                    placeholder='Search...'                    
                />
            </form>

            <div className='flex items-center space-x-8'>
                <Image src="/bell.png" alt="bell icon" width={32} height={32} />

                <div className='w-fit bg-gold rounded-full p-2'>
                    <Image src="/user.png" alt="user icon" width={24} height={24} />
                </div>
            </div>
        </nav>
    )
}

export default DashboardNav