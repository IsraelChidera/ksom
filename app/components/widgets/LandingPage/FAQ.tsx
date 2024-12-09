"use client";

import React, { useState } from 'react';
import Container from '@/app/components/elements/Container';
import { MdAddCircleOutline, MdOutlineCancel } from 'react-icons/md';

const FAQ = () => {

    const [active, setActive] = useState<number | null>(0);

    function handleActive(index: number) {
        active === index ? setActive(null) : setActive(index);
    }

    const faqs = [
        {
            id: 1,
            question: `Who can attend KSOM?`,
            answer: `Anyone and everyone, who is interested in seeking truth from Scriptures and becoming efficient in life, and in advancing the course of God's Kingdom here on earth.`
        },
        {
            id: 2,
            question: `Do I need to be a graduate to attend?`,
            answer: `Minimum requirement for prospective students is to have at least, acquired or completed a Secondary (or Senior High) School education.`
        },
        {
            id: 3,
            question: `What programs are offered at KSOM?`,
            answer: `KSOM provides teachings and training in the following areas: Pneumatology, Leadership, Ministry, Personal Transformation, Finance.`
        },
        {
            id: 4,
            question: `Can foreigners apply?`,
            answer: `Can foreigners apply?`
        },
        {
            id: 5,
            question: `Is it a bible school?`,
            answer: `Unlike 'most conventional Bible Schools, KSOM is a very spiritual school that seeks to build, transform and empower Believers, Five-fold ministers and Kingdom ambassadors, by the sound and infallible counsel and truth of God's Word. The school is designed to bring balance to life and living to anyone desiring to be Kingdom effective, and earthly relevant, simultaneously.`
        },
        {
            id: 6,
            question: `Will I be ordained as a pastor/apostle after attending KSOM?`,
            answer: `No. There is no special 'ordination service, as we have in conventional denominational Bible Schools. Instead, at the end of the school's session (graduation and impartation service), students receive impartation from our Father and President, Apostle Joshua Selman - in light of Deuteronomy 34:9 and Romans 1:11, empowering them into Kingdom service and representation.`
        },
        {
            id: 7,
            question: `Why should I attend KSOM?`,
            answer: `If you desire to grow in your relationship with God, understand His will for your life; discover yourself and become a better version of yourself; become effective in the Kingdom and secular work, and commit to seeing JESUS CHRIST revealed and glorified in and through your life, then attend KSOM.`
        },
        {
            id: 8,
            question: `How much is KSOM form sold and how much is the registration fee?`,
            answer: `KSOM forms are completely free. However, a one-time-off token 'commitment fee'  as against the usual registration fee' will be paid by ADMITTED STUDENTS (as will be instructed by the School's Management); for the respective campuses. PLEASE, besides this, the School, will NEVER request or demand any financial commitment, support or donation from prospective applicants and students.`
        },
        {
            id: 9,
            question: `Are there hostel accommodations?`,
            answer: `For now, no provisions for hostel accommodations. Admitted students will be responsible for their accommodations. However, admitted students can request for help  to secure accommodations)around the designated lecture venues from Koinonia's Public Relations departments.`
        },
        {
            id: 10,
            question: `Are there online classes?`,
            answer: `For now, No.`
        },
        {
            id: 11,
            question: `What is the duration of the school's session?`,
            answer: `KSOM runs every year, for a period of 7 months.`
        }
    ]
    return (
        <section id="faqs" className='py-[80px] text-text bg-[#ffffff]'>
            <Container>
                <h2 className='text-center font-medium text-[40px]'>
                    FAQs
                </h2>

                <div className='flex justify-center mt-4'>
                    <p className="w-[488px] text-center  text-[20px] ">
                        We're happy to answer your questions.
                    </p>
                </div>

                <div className='mt-[80px] '>
                    {
                        faqs.map((faq, _) => (
                            <div className='border-b border-b-gold pb-4 mb-[32px]'>
                                <div className="flex items-center justify-between">
                                    <p className="text-[#1A1A1A] text-[20px] font-semibold">
                                        {faq.question}
                                    </p>

                                    {/*  */}
                                    {
                                        active === _ ?
                                            <MdOutlineCancel onClick={() => handleActive(_)} className='text-[32px]' />
                                            :
                                            <MdAddCircleOutline onClick={() => handleActive(_)} className='text-[32px]' />
                                    }
                                </div>

                                {
                                    active === _ ? (
                                        <p className='mt-6 text-[17px] font-medium text-[#1a1a1a]'>
                                            {faq.answer}
                                        </p>
                                    ) :
                                        null
                                }

                            </div>
                        ))
                    }

                </div>
            </Container>
        </section>
    )
}

export default FAQ