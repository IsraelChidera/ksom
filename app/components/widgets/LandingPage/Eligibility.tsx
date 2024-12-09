import React from 'react';
import Container from '@/app/components/elements/Container';

const Eligibility = () => {

    const eligibility = [
        {
            id: 1,
            title: `Spiritual Commitment`,
            description: [
                `A genuine hunger to grow spiritually and fulfill God's purpose for their lives.`,
                `Alignment with KSOM's mission of raising transformational leaders and ambassadors of the Kingdom.`
            ]
        },
        {
            id: 2,
            title: `Educational Background`,
            description: [
                `A minimum of an OND (Ordinary National Diploma) or its equivalent.`,
                `Higher educational qualifications are an advantage but not mandatory.`
            ]
        },
        {
            id: 3,
            title: `Campus Availability `,
            description: [
                `Ability to attend in-person classes at either: <b>Zaria Campus</b> or <b>Abuja Campus<b/>.`,
                `Virtual learning is not currently offered.`
            ]
        },
        {
            id: 4,
            title: `Age Requirement `,
            description: [
                `Applicants must be at least 18 years old.`,
            ]
        },
        {
            id: 5,
            title: `Character and Lifestyle `,
            description: [
                `A lifestyle consistent with Christian values and ethics.`,
                `Commitment to excellence, integrity, and spiritual growth..`
            ]
        },
        {
            id: 6,
            title: `Commitment to Program`,
            description: [
                `Willingness to dedicate time for classes, assignments, and ministry-related activities.`,
            ]
        },
    ]

    return (
        <section id="eligibility" className="py-[80px] text-text bg-[#F0EADB]">
            <Container>
                <h2 className='text-center font-medium text-[32px]'>
                    Eligibility Criteria
                </h2>

                <div className='flex justify-center mt-4'>
                    <p className="w-[488px] text-center  text-[20px] ">
                        Ensure you meet the requirements to take the first step toward your academic journey.
                    </p>
                </div>

                <div className='mt-[80px] grid grid-cols-2 gap-x-[100px] gap-y-[40px]'>
                    {
                        eligibility.map((item) => (
                            <div key={item.id} className='border-t border-[#9F5E23] pt-6'>
                                <p className='font-bold text-[22px]'>{item.title}</p>
                                <ul className='mt-4 list-disc space-y-2'>
                                    {item.description.map((i, index) => (
                                        <li key={index} className='text-[20px]'>
                                            {i}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default Eligibility