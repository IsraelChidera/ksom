import React from 'react';
import Container from '@/app/components/elements/Container';

const ApplicationHeader = () => {
    return (
        <section className='py-[80px] '>
            <Container className='flex justify-center'>
                <div className='w-[640px]'>
                    <h1 className='text-center font-medium text-[40px]'>
                        Complete Your Application Today
                    </h1>

                    <p className=" text-center  text-[22px] ">
                        Fill out the form below to take the first step toward achieving your educational goals.
                    </p>
                </div>
            </Container>
        </section>
    )
}

export default ApplicationHeader