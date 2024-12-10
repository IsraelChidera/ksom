import React from 'react';
import Container from '@/app/components/elements/Container';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='py-[40px] bg-[#2D2D2D]'>
            <Container>
                <div className='pb-[32px] '>
                    <Image src="/logo2.png" alt="KSOM logo" width={84} height={40} />
                </div>

                <div className='border-t pt-[32px] text-white border-[#D9D9D9] lg:space-y-0 space-y-4 lg:flex items-center justify-between'>
                    <p>
                        Copyright ©2024, All rights reserved by KSOM.
                    </p>

                    <div className='flex items-center space-x-6'>
                        <Image src="/facebook.png" alt='KSOM Facebook' width={40} height={40} />

                        <Image src="/instagram.png" alt='KSOM Instagram' width={40} height={40} />

                        <Image src="/twitter.png" alt='KSOM twitter' width={40} height={40} />
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer