"use client"

import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@/app/components/elements/Button';
import { usePathname } from 'next/navigation';
import { FiUsers } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import { GrFlag } from 'react-icons/gr';
import { MdOutlineLogout } from 'react-icons/md';
import Link from 'next/link';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Image from 'next/image';

const DashboardNav = () => {

    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <nav className='flex items-center justify-between py-[32px] px-0 lg:px-[40px] border-b border-b-[#D9D9D9] h-[112px]'>
            {/* <form>
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
            </div> */}

            <div className="lg:hidden flex items-center gap-x-[111px]">
                <Button onClick={toggleDrawer(true)}>
                    <FaBars className='text-[32px] text-[#757577]' />
                </Button>

                <Image src="/logo.png" alt="KSOM logo" width={67} height={32} />
            </div>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {/* {DrawerList} */}
                <ul className='mt-[80px] space-y-[24px] px-6'>
                    <button onClick={toggleDrawer(false)}>
                        <FaXmark className='text-[32px] text-[#757577]' />
                    </button>

                    <li>
                        <Link
                            onClick={toggleDrawer(false)}
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
                            onClick={toggleDrawer(false)}
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
                            onClick={toggleDrawer(false)}
                            className={`${pathname === '/dashboard/benchmark' ? "bg-[#A57D3F1A] text-gold" : "text-[#1a1a1a] bg-transparent"} px-[20px] py-[8px] flex items-center space-x-4 rounded-[8px] `}
                            href="/dashboard/benchmark"
                        >
                            <GrFlag className="text-[24px]" />
                            <p className='font-medium text-sm '>
                                Benchmark
                            </p>
                        </Link>
                    </li>

                    <li
                        onClick={toggleDrawer(false)}
                    >
                        <button className='rounded-[8px] bg-white px-[20px] py-[8px] flex items-center space-x-4' >
                            <MdOutlineLogout className="text-[#FF0000] text-[24px]" />

                            <p className='text-[#FF0000] font-medium text-sm '>
                                Log out
                            </p>
                        </button>
                    </li>
                </ul>
            </Drawer>
        </nav>
    )
}

export default DashboardNav