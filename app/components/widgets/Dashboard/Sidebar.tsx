"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FiUsers } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import { GrFlag } from 'react-icons/gr';
import { MdOutlineLogout } from 'react-icons/md';

const Sidebar = () => {

    const pathname = usePathname();

    return (
        <aside className='bg-white h-screen border-r border-r-[#D9D9D9] px-[30px] py-[32px]'>
            <Image src="/logo.png" alt="KSOM logo" width={84} height={40} />

            <ul className='mt-[80px] space-y-[24px]'>
                <li>
                    <Link
                        className={`${pathname === '/dashboard' ? "bg-[#A57D3F1A] text-gold" : "text-[#1a1a1a] bg-transparent"} px-[20px] py-[8px] flex items-center space-x-4 rounded-[8px] `}
                        href="/dashboard"
                    >
                        <RxDashboard className="text-[24px]" />
                        <p className=' font-medium text-sm '>
                            Dashboard
                        </p>
                    </Link>
                </li>

                <li>
                    <Link
                        className={`${pathname === '/dashboard/applicants' ? "bg-[#A57D3F1A] text-gold" : "text-[#1a1a1a] bg-transparent"} px-[20px] py-[8px] flex items-center space-x-4 rounded-[8px] `}
                        href="/dashboard/applicants"
                    >
                        <FiUsers className="text-[24px]" />
                        <p className='font-medium text-sm '>
                            Applicants
                        </p>
                    </Link>
                </li>

                <li>
                    <Link
                        className={`${pathname === '/dashboard/benchmark' ? "bg-[#A57D3F1A] text-gold" : "text-[#1a1a1a] bg-transparent"} px-[20px] py-[8px] flex items-center space-x-4 rounded-[8px] `}
                        href="/dashboard/benchmark"
                    >
                        <GrFlag className="text-[24px]" />
                        <p className='font-medium text-sm '>
                            Benchmark
                        </p>
                    </Link>
                </li>

                <li>
                    <button  className='rounded-[8px] bg-white px-[20px] py-[8px] flex items-center space-x-4' >
                        <MdOutlineLogout className="text-[#FF0000] text-[24px]" />

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