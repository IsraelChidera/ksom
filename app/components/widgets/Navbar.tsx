import React from 'react';
import Container from '@/app/components/elements/Container';
import Button from '@/app/components/elements/Button';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="py-[28px] lg:py-[32px]">
            <Container className="flex items-center justify-center">
                <div className='w-[1060px] rounded-[100px] bg-primary py-[14px] px-[24px]'>
                    <div className="flex items-center justify-between">
                        <div>
                            <Image src="/logo.png" alt="KSOM logo" width={84} height={40} />
                        </div>

                        <ul className='text-[17px] space-x-[32px]'>
                            <li>
                                <Link href="#" className=''>
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className=''>
                                    Benefits
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className=''>
                                    Eligibility
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className=''>
                                    FAQs
                                </Link>
                            </li>

                            <Button>Apply Now</Button>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar