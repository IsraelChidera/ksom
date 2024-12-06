import React from 'react';
import Container from '@/app/components/elements/Container';
import Button from '@/app/components/elements/Button';

const NextStep = () => {
    return (
        <section className='py-[80px] '>
            <Container className='rounded-[24px] bg-[#F0EADB] flex items-center justify-center py-[64px] '>

                <div className='w-[573px]'>
                    <h2 className='text-center font-medium text-[40px]'>
                        Ready to Take the Next Step?
                    </h2>

                    <p className=" text-center  text-[20px] ">
                        Don't wait, secure your future today by submitting your application. Click below to get started.
                    </p>

                    <div className='mt-[34px] flex items-center justify-center'>
                        <Button classType="primary">
                            Apply Now
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default NextStep