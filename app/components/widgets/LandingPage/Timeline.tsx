import React from 'react';
import Container from '@/app/components/elements/Container';

const Timeline = () => {
    return (
        <section className='bg-[#ffffff] py-[80px] text-text'>
            <Container>
                <h2 className='text-center font-bold text-[28px] lg:text-[32px]'>
                    Admission Timeline
                </h2>

                <div className='flex justify-center mt-4'>
                    <p className="lg:w-[988px] text-center text-[18px] lg:text-[20px] ">
                        Applications for the <span className="font-bold">2025</span> academic and spiritual year will open on <span className="font-bold">16th December 2025</span>.
                        Stay updated with announcements, deadlines, and application requirements through the <span className="font-bold">KSOM admission portal.</span>
                    </p>
                </div>               
            </Container>
        </section>
    )
}

export default Timeline