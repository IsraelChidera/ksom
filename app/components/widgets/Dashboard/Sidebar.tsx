import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <aside className='bg-white h-screen border-r border-r-[#D9D9D9] px-[30px] py-[32px]'>
            <Image src="/logo.png" alt="KSOM logo" width={84} height={40} />

            <ul className='mt-[80px] space-y-[24px]'>
                <li>
                    <Link className='rounded-[8px] bg-[#A57D3F1A] px-[20px] py-[8px] flex items-center space-x-4' href="/dashboard">
                        <Image src="/dashboard.png" alt="dashboard icon" width={24} height={24} />
                        <p className='text-gold font-medium text-sm '>
                            Dashboard
                        </p>
                    </Link>
                </li>

                <li>
                    <Link className='rounded-[8px] bg-white px-[20px] py-[8px] flex items-center space-x-4' href="/dashboard/applicants">
                        <Image src="/user.png" alt="user icon" width={24} height={24} />
                        <p className='text-gold font-medium text-sm '>
                            Applicants
                        </p>
                    </Link>
                </li>

                <li>
                    <Link className='rounded-[8px] bg-white px-[20px] py-[8px] flex items-center space-x-4' href="/dashboard/benchmark">
                        <Image src="/user.png" alt="user icon" width={24} height={24} />
                        <p className='text-gold font-medium text-sm '>
                            Benchmark
                        </p>
                    </Link>
                </li>

                <li>
                    <button className='rounded-[8px] bg-white px-[20px] py-[8px] flex items-center space-x-4' >
                        <Image src="/user.png" alt="user icon" width={24} height={24} />
                        <p className='text-[#FF0000] font-medium text-sm '>
                            Log out
                        </p>
                    </button>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar