import React from 'react'
import EmptyRecord from './EmptyRecord'
import Link from 'next/link'

const RecentApplications = () => {

    return (
        <section className='bg-white mt-6 p-[20px] lg:p-[30px] rounded-[16px]'>
            <div className='lg:flex justify-between'>
                <h2 className='text-[17px] lg:text-[20px] text-text font-semibold lg:font-bold mb-[24px]'>Recent applications</h2>

                <form>
                    <input
                        type="text"
                        className='relative text-[13px] lg:text-base placeholder:text-[#757577] lg:w-[300px] w-full px-[16px] py-[10px] rounded-[24px] opacity-70 border border-[#757577]'
                        placeholder='Search by name and email'
                    />
                </form>
            </div>

            <div>
                {/* Empty records components */}
                {/* <EmptyRecord /> */}

                <div className='overflow-x-auto mt-[40px]'>
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
                </div>
            </div>
        </section>
    )
}

export default RecentApplications