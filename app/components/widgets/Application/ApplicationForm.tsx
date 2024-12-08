import React from 'react';
import Button from '@/app/components/elements/Button';

const ApplicationForm = () => {

    const agreement = [
        {
            id: 1,
            title: `Accuracy of Information:`,
            description: [
                `All information provided in this application form is accurate and truthful to the best of your knowledge. Any falsified information may result in automatic disqualification or withdrawal from the program.`
            ]
        },
        {
            id: 2,
            title: `Adherence to Policies:`,
            description: [
                `You commit to abide by KSOM's rules, regulations, and code of conduct throughout the duration of the program.`,
                `You understand that KSOM reserves the right to take disciplinary actions, including dismissal, for any breach of policies.`
            ]
        },
        {
            id: 3,
            title: `Attendance Commitment:`,
            description: [
                `You acknowledge that KSOM is an intensive in-person program requiring full attendance at the selected campus (Abuja or Zaria).`,
                `You are fully responsible for your accommodation and upkeep throughout the duration of the program, as KSOM does not provide accommodations.`
            ]
        },
        {
            id: 4,
            title: `Spiritual and Personal Growth:`,
            description: [
                `You are joining KSOM with the intent to grow spiritually, develop leadership skills, and align with God's purpose for your life.`,
            ]
        },
        {
            id: 5,
            title: `Non-Refundable Fees:`,
            description: [
                `You understand that any application or tuition fees paid are non-refundable once submitted.`,
            ]
        },
        {
            id: 6,
            title: `Confidentiality of Program Content:`,
            description: [
                `You agree to respect and maintain the confidentiality of proprietary teachings, materials, and program content shared during the course.`,
            ]
        },
        {
            id: 7,
            title: `Authority and Decision:`,
            description: [
                `You accept that KSOM's administrative team has the sole authority to review and select applicants based on eligibility and alignment with the school's mission.`,
            ]
        },
    ]
    return (
        <section className='py-[80px] flex justify-center'>
            <form className='w-[820px] space-y-[48px]'>
                {/* Personal Info */}
                <p className='text-text font-bold text-[22px]'>Personal Information</p>

                <div>
                    <label className='block font-medium text-[20px]'>Surname <span className='text-red-600'>{"(Required)"}</span></label>
                    <input
                        type='text'
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        required
                    />
                </div>

                <div>
                    <label className='block font-medium text-[20px]'>First Name <span className='text-red-600'>{"(Required)"}</span></label>
                    <input
                        type='text'
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        required
                    />
                </div>

                <div className=" grid grid-cols-2 gap-[60px]">
                    <div>
                        <label className='block font-medium text-[20px]'>Gender <span className='text-red-600'>{"(Required)"}</span></label>
                        <select className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <div>
                        <label className='block font-medium text-[20px]'>Marital Status <span className='text-red-600'>{"(Required)"}</span></label>
                        <select className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'>
                            <option>Single</option>
                            <option>Married</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className='block font-medium text-[20px]'>Date of Birth <span className='text-red-600'>{"(Required)"}</span></label>
                    <input
                        type='date'
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        required
                    />
                </div>

                {/* Contact Info */}
                <p className='mt-[40px] text-text font-bold text-[22px]'>Contact Information</p>

                <div>
                    <label className='block font-medium text-[20px]'>Residential Address <span className='text-red-600'>{"(Required)"}</span></label>
                    <input
                        type='text'
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-[60px]">
                    <div>
                        <label className='block font-medium text-[20px]'>City/Town <span className='text-red-600'>{"(Required)"}</span></label>
                        <input
                            type='text'
                            className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                            required
                        />
                    </div>

                    <div>
                        <label className='block font-medium text-[20px]'>State of Residence <span className='text-red-600'>{"(Required)"}</span></label>
                        <input
                            type='text'
                            className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                            required
                        />
                    </div>

                    <div>
                        <label className='block font-medium text-[20px]'>Nationality <span className='text-red-600'>{"(Required)"}</span></label>
                        <input
                            type='text'
                            className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                            required
                        />
                    </div>

                    <div>
                        <label className='block font-medium text-[20px]'>Email Address <span className='text-red-600'>{"(Required)"}</span></label>
                        <input
                            type='email'
                            className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className='block font-medium text-[20px]'>Phone Number <span className='text-red-600'>{"(Required)"}</span></label>
                    <input
                        type='text'
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        required
                    />
                </div>

                {/* Spiritual Background */}
                <p className='mt-[40px] text-text font-bold text-[22px]'>Spiritual Background</p>
                <div>
                    <label className='block font-medium text-[20px]'>
                        1. Are you born again? <span className='text-red-600'>{"(Required)"}</span>
                    </label>

                    <div className="mt-4 px-[27px] flex items-center space-x-6">
                        <div className='space-x-2'>
                            <input type="radio" id="yes" name="bornAgain" value="yes" />
                            <label htmlFor="yes">Yes</label>
                        </div>

                        <div className='space-x-2'>
                            <input type="radio" id="no" name="bornAgain" value="no" />
                            <label htmlFor="no">No</label>
                        </div>
                    </div>
                </div>

                <div>
                    <label className='block font-medium text-[20px]'>
                        2. Briefly share your salvation experience <span className='text-red-600'>{"(Required)"}</span>
                    </label>

                    <input
                        type='text'
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        required
                    />
                </div>

                <div>
                    <label className='block font-medium text-[20px]'>
                        3. Are you filled with the Holy Spirit with the evidence of speaking in tongues? <span className='text-red-600'>{"(Required)"}</span>
                    </label>

                    <div className="mt-4 px-[27px] flex items-center space-x-6">
                        <div className='space-x-2'>
                            <input type="radio" id="yes" name="holySpirit" value="yes" />
                            <label htmlFor="yes">Yes</label>
                        </div>

                        <div className='space-x-2'>
                            <input type="radio" id="no" name="holySpirit" value="no" />
                            <label htmlFor="no">No</label>
                        </div>
                    </div>
                </div>

                <div>
                    <label className='block font-medium text-[20px]'>
                        4. What is your calling/purpose in life? <span className='text-red-600'>{"(Required)"}</span>
                    </label>

                    <input
                        type='text'
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        required
                    />
                </div>

                {/* Church/Min info */}
                <p className='mt-[40px] text-text font-bold text-[22px]'>Church/Ministry Information</p>
                <div>
                    <label className='block font-medium text-[20px]'>
                        Local Assembly/Fellowship/Church Name <span className='text-red-600'>{"(Required)"}</span>
                    </label>

                    <input
                        type='text'
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        required
                    />
                </div>

                <div>
                    <label className='block font-medium text-[20px]'>
                        Local Assembly/Fellowship/Church Name <span className='text-red-600'>{"(Required)"}</span>
                    </label>

                    <input
                        type='text'
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        required
                    />
                </div>

                {/* Academic & Professional Background */}
                <p className='mt-[40px] text-text font-bold text-[22px]'>Academic & Professional Background</p>
                <div>
                    <label className='block font-medium text-[20px]'>
                        Highest Academic Qualification <span className='text-red-600'>{"(Required)"}</span>
                    </label>

                    <input
                        type='text'
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        required
                    />
                </div>

                <div>
                    <label className='block font-medium text-[20px]'>
                        Current Occupation <span className='text-red-600'>{"(Required)"}</span>
                    </label>

                    <input
                        type='text'
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        required
                    />
                </div>

                {/* Campus Preference & Logistics */}
                <p className='mt-[40px] text-text font-bold text-[22px]'>Campus Preference & Logistics</p>
                <div>
                    <label className='block font-medium text-[20px]'>
                        Choice of Campus <span className='text-red-600'>{"(Required)"}</span>
                    </label>

                    <select className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'>
                        <option>Abuja</option>
                        <option>Warri</option>
                    </select>
                </div>

                <div>
                    <label className='block font-medium text-[20px]'>
                        Plans for Accommodation and Upkeep <span className='text-red-600'>{"(Required)"}</span>
                    </label>

                    <input
                        type='text'
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        required
                    />
                </div>

                {/* Additional Documents */}
                <p className='mt-[40px] text-text font-bold text-[22px]'>Additional Documents</p>
                <div>
                    <label className='block font-medium text-[20px]'>
                        Choice of Campus <span className='text-red-600'>{"(Required)"}</span>
                    </label>

                    <select className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'>
                        <option>Abuja</option>
                        <option>Warri</option>
                    </select>
                </div>

                {/* Personal Statement */}
                <p className='mt-[40px] text-text font-bold text-[22px]'>Personal Statement</p>
                <div>
                    <label className='block font-medium text-[20px]'>
                        Write a brief statement {"(300-500 words)"} about why you want to join KS0M, your expectations, and how you plan to apply what you learn. <span className='text-red-600'>{"(Required)"}</span>
                    </label>

                    <textarea
                        className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                        rows={4}
                        cols={4}
                        required
                    >
                    </textarea>
                </div>

                {/* References */}
                <div className="mt-[40px]">
                    <p className=' text-text font-bold text-[22px]'>References</p>
                    <p className="mt-[24px] text-text font-medium text-[20px] leading-[30px]">
                        Provide the name and contact details of one spiritual leader or mentor who can vouch for your character and commitment.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-[60px]">
                    <div>
                        <label className='block font-medium text-[20px]'>
                            Name <span className='text-red-600'>{"(Required)"}</span>
                        </label>

                        <input
                            type='text'
                            className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                            required
                        />
                    </div>

                    <div>
                        <label className='block font-medium text-[20px]'>
                            Position <span className='text-red-600'>{"(Required)"}</span>
                        </label>

                        <input
                            type='text'
                            className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                            required
                        />
                    </div>

                    <div>
                        <label className='block font-medium text-[20px]'>
                            Phone Number <span className='text-red-600'>{"(Required)"}</span>
                        </label>

                        <input
                            type='text'
                            className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                            required
                        />
                    </div>

                    <div>
                        <label className='block font-medium text-[20px]'>
                            Email Address <span className='text-red-600'>{"(Required)"}</span>
                        </label>

                        <input
                            type='text'
                            className='text-[17px] focus:outline-none border-b border-b-text w-full mt-[48px]'
                            required
                        />
                    </div>
                </div>

                {/* Agreement Terms */}
                <div className="mt-[40px]">
                    <p className=' text-text font-bold text-[22px]'>Agreement Terms</p>
                    <p className="mt-[24px] text-text font-medium text-[20px] leading-[30px]">
                        By applying to the Koinonia School of Ministry (KSOM), you agree to the following terms and conditions:
                    </p>
                </div>

                <div className='space-y-[24px]'>
                    {
                        agreement.map((items) => (
                            <div key={items.id}>
                                <p className=' text-text font-bold text-[20px]'>{items.title}</p>
                                <ul className='list-disc mt-4'>
                                    {
                                        items.description.map((item, index) => (
                                            <li key={index} className='text-text font-medium text-[17px]'>
                                                {item}
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        ))
                    }
                </div>

                {/* Declaration */}
                <div>
                    <p className='mb-[24px] text-text font-bold text-[22px]'>Declaration</p>

                    <p className='text-[20px] font-medium text-[#1a1a1a]'>
                        I <input type="text" className='text-[17px] focus:outline-none border-b border-b-text ' />, hereby declare that:
                    </p>

                    <div className="mt-6 space-y-[8px] text-[17px] text-text font-medium">
                        <p>
                            1. The information I have provided in this application is true, complete, and accurate.
                        </p>

                        <p>
                            2. I fully understand and agree to abide by the terms and conditions outlined above.
                        </p>

                        <p>
                            3. I acknowledge that failure to comply with KSOM policies or provide accurate information may result in the withdrawal of my application or expulsion from the program.
                        </p>
                    </div>
                </div>

                <div>
                    <input type="checkbox" className='text-[32px]' required />
                    <label className="text-[17px] font-medium pl-2 ">
                        I agree to the <span className="text-gold">Terms</span> and <span className="text-gold">Conditions</span> outlined above and affirm that my application is truthful.
                    </label>
                </div>

                <p className='text-[20px] font-medium text-[#1a1a1a]'>
                    Date <input type="text" className='text-[17px] focus:outline-none border-b border-b-text ' />
                </p>

                <Button classType="primary">
                    Submit
                </Button>
            </form>
        </section>
    )
}

export default ApplicationForm