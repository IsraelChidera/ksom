import React from 'react';
import Container from '@/app/components/elements/Container';

const Gains = () => {

    const gains = [
        {
            id: 1,
            title: `Deep Spiritual Growth`,
            description: `Develop intimacy with the Holy Spirit through in-depth teachings on Pneumatology and Kingdom mysteries.`
        },
        {
            id: 2,
            title: `Leadership Excellence`,
            description: `Gain actionable principles for integrity-driven and visionary leadership.`
        },
        {
            id: 3,
            title: `Ministry Proficiency`,
            description: `Receive practical training to serve effectively with humility, power, and wisdom`
        },
        {
            id: 4,
            title: `Personal Transformation`,
            description: `Align your life with God's purpose while becoming the best version of yourself.`
        },
        {
            id: 5,
            title: `Kingdom Financial Wisdom`,
            description: `Master the principles of Kingdom economics and resource stewardship for lasting impact.`
        },
        {
            id: 6,
            title: `Mentorship from Seasoned Leaders`,
            description: `Learn directly from experienced ministers, including Apostle Joshua Selman.`
        },
        {
            id: 7,
            title: `Networking Opportunities`,
            description: `Build lifelong connections with passionate, like-minded individuals advancing the Kingdom of God.`
        },
    ]
    return (
        <section id="benefits" className='bg-[#2D2D2D] py-[80px] text-white'>
            <Container>
                <div>
                    <h2 className='text-center font-medium text-[28px] lg:text-[32px]'>
                        What you will gain at KSOM
                    </h2>

                    <div className='flex justify-center mt-4'>
                        <p className="lg:w-[488px] text-center text-base lg:text-[20px] ">
                            At KSOM, students embark on a transformational journey with the following benefits:
                        </p>
                    </div>

                    <div className='mt-[80px] lg:grid lg:grid-cols-2 lg:gap-[40px] space-y-6 lg:space-y-0'>
                        {
                            gains.map((gain: any) => (
                                <div key={gain.id} className='bg-[#575757] rounded-[16px] p-6 text-white'>
                                    <h3 className="font-bold text-[20px] lg:text-[22px]">
                                        {gain.title}
                                    </h3>

                                    <p className='mt-[8px] leading-[35px] text-[18px] lg:text-[20px]'>
                                        {gain.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Gains