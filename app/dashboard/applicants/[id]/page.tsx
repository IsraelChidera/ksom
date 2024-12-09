"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa6";
import Button from '@/app/components/elements/Button';

const page = () => {
    const router = useRouter();

    return (
        <main className='py-[32px] px-[40px] bg-[#f9f9f9]'>
            <div className='flex items-center mb-[24px] space-x-6'>
                <FaArrowLeft onClick={() => router.back()} className='text-[30px] cursor-pointer' />
                <h1 className='text-[28px] text-text font-bold'>Applicant details</h1>
            </div>

            <div className="bg-white rounded-[16px] p-[30px]  ">
                <p className='text-[22px] font-semibold text-[#1a1a1a]'>James David</p>

                <div className='mt-[40px] flex items-center space-x-[40px]'>
                    <div>
                        <p className='text-[#757577] text-base font-medium mb-2'>Email</p>
                        <p className='text-[1a1a1a] font-semibold text-[17px]'>james@gmail.com</p>
                    </div>

                    <div>
                        <p className='text-[#757577] text-base font-medium mb-2'>Phone NO</p>
                        <p className='text-[1a1a1a] font-semibold text-[17px]'>+2348146265074</p>
                    </div>

                    <div>
                        <p className='text-[#757577] text-base font-medium mb-2'>Status</p>
                        <p className="rounded-[30px] text-[17px] px-[14px] py-[6px] bg-[#ECA72C26] text-[#ECA72C]">
                            Pending
                        </p>
                    </div>

                    <div>
                        <p className='text-[#757577] text-base font-medium mb-2'>Total Points</p>
                        <p className='text-[1a1a1a] font-semibold text-[17px]'>+85</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[16px] p-[30px] text-[#1a1a1a] mt-[32px]">
                <p className='text-[22px] font-semibold text-[#1a1a1a]'>Grading Form</p>

                <form className='mt-[40px] '>
                    <div className="grid grid-cols-2 gap-[40px]">
                        <div>
                            <p className='text-[20px] font-medium mb-4'>
                                1. State of residence <span className="text-red-400">{"(5 points)"}</span>
                            </p>

                            <input type="text" placeholder='Lagos' className='block rounded-[10px] w-full text-[17px] bg-[#EEEEEE] py-4 px-5 ' disabled />

                            <select className="text-base w-full mt-4 px-5 py-4 border border-[#d9d9d9] rounded-[10px]" required>
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </div>

                        <div>
                            <p className='text-[20px] font-medium mb-4'>
                                2. Are you born again? <span className="text-red-400">{"(10 points)"}</span>
                            </p>

                            <input type="text" placeholder='Yes' className='block rounded-[10px] w-full text-[17px] bg-[#EEEEEE] py-4 px-5 ' disabled />

                            <select className="text-base w-full mt-4 px-5 py-4 border border-[#d9d9d9] rounded-[10px]" required>
                                <option>10</option>
                                <option>9</option>
                                <option>8</option>
                                <option>7</option>
                                <option>6</option>
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </div>

                        <div>
                            <p className='text-[20px] font-medium mb-4'>
                                3. Are you filled with the Holy Spirit? <span className="text-red-400">{"(10 points)"}</span>
                            </p>

                            <input type="text" placeholder='Yes' className='block rounded-[10px] w-full text-[17px] bg-[#EEEEEE] py-4 px-5 ' disabled />

                            <select className="text-base w-full mt-4 px-5 py-4 border border-[#d9d9d9] rounded-[10px]" required>
                                <option>10</option>
                                <option>9</option>
                                <option>8</option>
                            </select>
                        </div>

                        <div>
                            <p className='text-[20px] font-medium mb-4'>
                                4. Highest Academic Qualification <span className="text-red-400">{"(5 points)"}</span>
                            </p>

                            <input type="text" placeholder='Postgraduate' className='block rounded-[10px] w-full text-[17px] bg-[#EEEEEE] py-4 px-5 ' disabled />

                            <select className="text-base w-full mt-4 px-5 py-4 border border-[#d9d9d9] rounded-[10px]" required>
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </div>

                        <div>
                            <p className='text-[20px] font-medium mb-4'>
                                5. Briefly share your salvation experience <span className="text-red-400">{"(15 points)"}</span>
                            </p>

                            <textarea
                                className='block rounded-[10px] w-full text-[17px] bg-[#EEEEEE] py-4 px-5 '
                                placeholder='Answer'
                                rows={4}
                                cols={4}
                                disabled
                            >
                            </textarea>


                            <select className="text-base w-full mt-4 px-5 py-4 border border-[#d9d9d9] rounded-[10px]" required>
                                <option>15</option>
                                <option>14</option>
                                <option>13</option>
                                <option>12</option>
                                <option>11</option>
                            </select>
                        </div>

                        <div>
                            <p className='text-[20px] font-medium mb-4'>
                                6. What is your calling or purpose? <span className="text-red-400">{"(15 points)"}</span>
                            </p>

                            <textarea
                                className='block rounded-[10px] w-full text-[17px] bg-[#EEEEEE] py-4 px-5 '
                                placeholder='Answer'
                                rows={4}
                                cols={4}
                                disabled
                            >
                            </textarea>


                            <select className="text-base w-full mt-4 px-5 py-4 border border-[#d9d9d9] rounded-[10px]" required>
                                <option>15</option>
                                <option>14</option>
                                <option>13</option>
                                <option>12</option>
                                <option>11</option>
                            </select>
                        </div>

                        <div>
                            <p className='text-[20px] font-medium mb-4'>
                                7. Plans for Accommodation and Upkeep <span className="text-red-400">{"(10 points)"}</span>
                            </p>

                            <textarea
                                className='block rounded-[10px] w-full text-[17px] bg-[#EEEEEE] py-4 px-5 '
                                placeholder='Answer'
                                rows={4}
                                cols={4}
                                disabled
                            >
                            </textarea>


                            <select className="text-base w-full mt-4 px-5 py-4 border border-[#d9d9d9] rounded-[10px]" required>
                                <option>10</option>
                                <option>9</option>
                                <option>8</option>
                                <option>7</option>
                                <option>6</option>
                            </select>
                        </div>

                        <div>
                            <p className='text-[20px] font-medium mb-4'>
                                8. Personal Statement <span className="text-red-400">{"(15 points)"}</span>
                            </p>

                            <textarea
                                className='block rounded-[10px] w-full text-[17px] bg-[#EEEEEE] py-4 px-5 '
                                placeholder='Answer'
                                rows={4}
                                cols={4}
                                disabled
                            >
                            </textarea>


                            <select className="text-base w-full mt-4 px-5 py-4 border border-[#d9d9d9] rounded-[10px]" required>
                                <option>15</option>
                                <option>14</option>
                                <option>13</option>
                                <option>12</option>
                                <option>11</option>
                            </select>
                        </div>

                        <div>
                            <p className='text-[20px] font-medium mb-4'>
                                9. Reference <span className="text-red-400">{"(15 points)"}</span>
                            </p>

                            <textarea
                                className='block rounded-[10px] w-full text-[17px] bg-[#EEEEEE] py-4 px-5 '
                                placeholder='Answer'
                                rows={4}
                                cols={4}
                                disabled
                            >
                            </textarea>


                            <select className="text-base w-full mt-4 px-5 py-4 border border-[#d9d9d9] rounded-[10px]" required>
                                <option>15</option>
                                <option>14</option>
                                <option>13</option>
                                <option>12</option>
                                <option>11</option>
                            </select>
                        </div>
                    </div>

                    <div className='w-full mt-[48px]'>
                        <p className='text-right text-[#1a1a1a] text-[22px] border-y border-y-[#d9d9d9] py-[24px]'>
                            <span className="font-bold">Total:</span> 85
                        </p>

                        <Button classType="primary" className="w-full mt-[48px]">
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default page