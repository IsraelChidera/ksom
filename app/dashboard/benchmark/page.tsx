import React from 'react';
import Button from '@/app/components/elements/Button';
import EmptyRecord from '@/app/components/widgets/Dashboard/EmptyRecord';
import Link from 'next/link';
import { CiMail } from 'react-icons/ci';

const page = () => {
    return (
        <main className='py-[32px] px-[40px] bg-[#f9f9f9] '>
            <div className='mb-[40px] flex items-center justify-between'>
                <h1 className='text-[28px] text-text font-bold '>Benchmark</h1>

                <Button classType="primary" className='flex space-x-2 items-center' >
                    <CiMail className='text-[20px] ' />
                    <span className='block'>Send Email</span>
                </Button>
            </div>

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