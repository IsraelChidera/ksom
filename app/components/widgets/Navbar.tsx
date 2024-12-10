import React from 'react';
import Container from '@/app/components/elements/Container';
import Button from '@/app/components/elements/Button';
import Image from 'next/image';
import Link from 'next/link';
import { HiBars3CenterLeft } from 'react-icons/hi2';

const Navbar = () => {
    return (
        <nav className="py-[28px] lg:py-[32px]">
            <Container className="flex items-center justify-center">
                <div className='w-full lg:w-[1060px] rounded-[100px] bg-primary py-[14px] px-[24px]'>
                    <div className="flex items-center justify-between">
                        <div>
                            <Image src="/logo.png" alt="KSOM logo" width={84} height={40} />
                        </div>

                        <ul className='text-[17px] space-x-[32px] hidden lg:flex items-center'>
                            <li>
                                <Link href="/#about" className='text-text cursor-pointer hover:opacity-80'>
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="/#benefits" className='text-text cursor-pointer hover:opacity-80'>
                                    Benefits
                                </Link>
                            </li>

                            <li>
                                <Link href="/#eligibility" className='text-text cursor-pointer hover:opacity-80'>
                                    Eligibility
                                </Link>
                            </li>

                            <li>
                                <Link href="/#faqs" className='text-text cursor-pointer hover:opacity-80'>
                                    FAQs
                                </Link>
                            </li>

                            <Link href="/application">
                                <Button classType='primary'>Apply Now</Button>
                            </Link>
                        </ul>

                        <HiBars3CenterLeft className="text-[24px] lg:hidden block"  />
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar