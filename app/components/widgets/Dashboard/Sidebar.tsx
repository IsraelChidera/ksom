"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FiUsers } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import { GrFlag } from 'react-icons/gr';
import { MdOutlineLogout } from 'react-icons/md';
import Button from '@/app/components/elements/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #fff',
    borderRadius: '16px',
    boxShadow: 24,
    p: 4,
};

const Sidebar = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <button onClick={handleOpen} className='rounded-[8px] bg-white px-[20px] py-[8px] flex items-center space-x-4' >
                        <MdOutlineLogout className="text-[#FF0000] text-[24px]" />

                        <p className='text-[#FF0000] font-medium text-sm '>
                            Log out
                        </p>
                    </button>
                </li>
            </ul>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='pt-[48px] pb-[32px] px-[24px]'
            >
                <Box sx={style}>
                    <div className='flex justify-center'>
                        <div className="bg-[#A57D3F1A] w-fit rounded-full p-4">
                            <MdOutlineLogout className='text-[40px]' />
                        </div>
                    </div>

                    <p className="text-center mt-[24px] font-semibold text-[24px] text-[#1a1a1a]">
                        Logout
                    </p>

                    <p className="text-center mt-2 font-medium text-[17px] text-[#757577]">
                        Are you sure you want to logout?
                    </p>

                    <div className='flex justify-center mt-6'>
                        <div className='grid grid-cols-2 gap-[30px]'>
                            <Button onClick={handleClose} classType="secondary">
                                Cancel
                            </Button>

                            <Button classType="primary">
                                Logout
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </aside>
    )
}

export default Sidebar