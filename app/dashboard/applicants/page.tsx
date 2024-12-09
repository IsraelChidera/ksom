import EmptyRecord from '@/app/components/widgets/Dashboard/EmptyRecord'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <main className='py-[32px] px-[40px] bg-[#f9f9f9]'>
            <h1 className='text-[28px] text-text font-bold mb-[24px]'>Applicants</h1>

            <div className='mt-[40px] flex items-center justify-between'>
                <div className='relative flex items-center space-x-4'>
                    <button className='rounded-[8px] py-3 px-4 bg-[#eeeeee] text-[#191c1f] text-base font-medium'>Clear filters</button>

                    <button className='rounded-[8px] py-3 px-4 bg-[#eeeeee] text-[#191c1f] text-base font-medium'>Grade</button>

                    <button className='rounded-[8px] py-3 px-4 bg-[#eeeeee] text-[#191c1f] text-base font-medium'>
                        Status
                    </button>
                </div>

                <form>
                    <input
                        type="text"
                        className='relative lg:w-[300px] px-[16px] py-[10px] rounded-[24px] opacity-70 border border-[#757577]'
                        placeholder='Search...'
                    />
                </form>
            </div>

            <div className='mt-[40px] overflow-x-auto'>
                <table className='w-full'>
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
                                <Link className="text-[#757577] hover:underline" href="/dashboard/applicants/id">
                                    View
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* <div className='flex items-center justify-center'>
                    <EmptyRecord />
                </div> */}
            </div>
        </main>
    )
}

export default page