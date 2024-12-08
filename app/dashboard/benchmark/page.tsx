"use client"

import React from 'react';
import Button from '@/app/components/elements/Button';
import EmptyRecord from '@/app/components/widgets/Dashboard/EmptyRecord';
import Link from 'next/link';
import { CiMail } from 'react-icons/ci';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IoCloseSharp } from 'react-icons/io5';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1050,
    bgcolor: 'background.paper',
    border: '1px solid #fff',
    borderRadius: '16px',
    boxShadow: 24,
    p: 4,
};

const page = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <main className='py-[32px] px-[40px] bg-[#f9f9f9] '>
            <div className='mb-[40px] flex items-center justify-between'>
                <h1 className='text-[28px] text-text font-bold '>Benchmark</h1>

                <Button onClick={handleOpen} classType="primary" className='flex space-x-2 items-center' >
                    <CiMail className='text-[20px] ' />
                    <span className='block'>Send Email</span>
                </Button>
            </div>

            {/* Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='pt-[48px] pb-[32px] px-[24px]'
            >
                <Box sx={style}>
                    <div className='flex justify-between items-center'>
                        <p className="text-center mt-[24px] font-semibold text-[22px] text-[#1a1a1a]">
                            Send Email
                        </p>

                        <IoCloseSharp onClick={handleClose} className="text-text cursor-pointer text-[32px]" />
                    </div>

                    <form className='mt-[48px] space-y-[32px]'>
                        <select className='text-[17px] rounded-[10px] focus:outline-none border border-[#D9D9D9] px-[20px] py-[15px] w-full mt-[48px]'>
                            <option>Select Applicant</option>
                            <option>All Applicants</option>
                            <option>Accepted Applicants</option>
                            <option>Rejected Applicants</option>
                        </select>

                        <input
                            type='text'
                            placeholder='Subject'
                            className='block text-[17px] rounded-[10px] focus:outline-none border border-[#D9D9D9] px-[20px] py-[15px] w-full mt-[48px]'
                            required
                        />

                        <div className="flex justify-end">
                            <div className='flex items-center space-x-4'>
                                <Button onClick={handleClose} classType="secondary">
                                    Cancel
                                </Button>

                                <Button classType="primary">
                                    Send
                                </Button>
                            </div>
                        </div>
                    </form>                    
                </Box>
            </Modal>

            <form className='bg-white rounded-[16px] p-[30px] w-fit'>
                <label className='block text-text text-[20px] font-semibold'>
                    Benchmark Threshold for Acceptance (%)
                </label>

                <div>
                    <input
                        type="text"
                        className='w-[428px] mt-4 border border-[#d9d9d9] rounded-[10px] px-[20px] py-[15px]'
                        placeholder='0'
                    />
                </div>

                <Button classType='primary' className='w-full mt-6'>
                    Submit
                </Button>
            </form>

            <table className='w-full mt-[24px]'>
                <thead className='bg-[#EEEEEE] py-4'>
                    <tr className=' w-full'>
                        <th className="p-4 text-left uppercase text-xs font-semibold ">
                            Name
                        </th>

                        <th className="p-4 text-left uppercase text-xs font-semibold ">
                            Email
                        </th>

                        <th className="p-4 text-left uppercase text-xs font-semibold ">
                            Grade
                        </th>

                        <th className="p-4 text-left uppercase text-xs font-semibold ">
                            Status
                        </th>

                        <th className="p-4 text-left uppercase text-xs font-semibold ">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody className='text-[#1A1A1A]'>
                    <tr className='border-t border-t-[#E5E7EB] py-4 w-full border-b border-b-[#D9D9D9]'>
                        <td className="p-4 text-left text-sm font-normal ">
                            James David
                        </td>

                        <td className="p-4 text-left text-sm font-normal ">
                            james@gmail.com
                        </td>

                        <td className="p-4 text-left text-sm font-normal ">
                            85
                        </td>

                        <td className="p-4 text-left text-xs font-normal ">
                            <span className="rounded-[30px] px-[14px] py-[6px] bg-[#ECA72C26] text-[#ECA72C]">
                                Pending
                            </span>
                        </td>

                        <td className="p-4 text-left text-sm font-normal ">
                            <Link className="text-[#757577] hover:underline" href="/dashboard/applicants/id">
                                View
                            </Link>
                        </td>
                    </tr>

                    <tr className='border-t border-t-[#E5E7EB] py-4 w-full border-b border-b-[#D9D9D9]'>
                        <td className="p-4 text-left text-sm font-normal ">
                            James David
                        </td>

                        <td className="p-4 text-left text-sm font-normal ">
                            james@gmail.com
                        </td>

                        <td className="p-4 text-left text-sm font-normal ">
                            85
                        </td>

                        <td className="p-4 text-left text-xs font-normal ">
                            <span className="rounded-[30px] px-[14px] py-[6px] bg-[#ECA72C26] text-[#ECA72C]">
                                Pending
                            </span>
                        </td>

                        <td className="p-4 text-left text-sm font-normal ">
                            <Link className="text-[#757577] hover:underline" href="/dashboard/applicants/id">
                                View
                            </Link>
                        </td>
                    </tr>

                    <tr className='border-t border-t-[#E5E7EB] py-4 w-full border-b border-b-[#D9D9D9]'>
                        <td className="p-4 text-left text-sm font-normal ">
                            James David
                        </td>

                        <td className="p-4 text-left text-sm font-normal ">
                            james@gmail.com
                        </td>

                        <td className="p-4 text-left text-sm font-normal ">
                            85
                        </td>

                        <td className="p-4 text-left text-xs font-normal ">
                            <span className="rounded-[30px] px-[14px] py-[6px] bg-[#ECA72C26] text-[#ECA72C]">
                                Pending
                            </span>
                        </td>

                        <td className="p-4 text-left text-sm font-normal ">
                            <Link className="text-[#757577] hover:underline" href="/dashboard/benchmark/id">
                                View
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* <div className='bg-white flex items-center justify-center'>
                <EmptyRecord />
            </div> */}
        </main>
    )
}

export default page