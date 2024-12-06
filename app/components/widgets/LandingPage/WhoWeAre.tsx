import React from 'react';
import Container from '@/app/components/elements/Container';

const WhoWeAre = () => {
    return (
        <section className='bg-primary py-[80px]'>
            <Container className="flex justify-center">
                <div className='w-[880px]'>
                    <h2 className='font-medium text-[32px] text-text'>
                        Who we are
                    </h2>

                    <p className="mt-[32px] text-text text-[20px] space-y-6">
                        <span className='block'>
                            The Koinonia School of Ministry (KSOM) is the training and Bible education institution of Eternity Network International (ENI), founded in 2013 by Apostle Joshua Selman under divine instructions. KSOM is not just a school; it is a movement committed to raising Kingdom ambassadors who are equipped to transform society in various spheres of influence.
                        </span>

                        <span className='block'>
                            Over the last decade, KSOM has graduated more than 4,000 men and women of God, empowering them to advance the Kingdom globally through excellence in ministry, leadership, and personal impact.
                        </span>

                        <span className='block'>
                            KSOM operates through two campuses-Zaria and Abuja-creating an immersive environment for spiritual growth, leadership development, and practical ministry training. Students at KSOM receive holistic equipping to excel in their God-given assignments, making significant contributions to their communities and the body of Christ.
                        </span>
                    </p>
                </div>
            </Container>
        </section>
    )
}

export default WhoWeAre