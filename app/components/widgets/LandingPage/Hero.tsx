"use client"

import React from 'react'
import Container from '@/app/components/elements/Container';
import Button from '@/app/components/elements/Button';
import Navbar from '../Navbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';
import Image from 'next/image';

const Hero = () => {
    return (
        <header className=" relative">
            <Swiper
                className="relative z-10"
                loop={true}
                grabCursor={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                breakpoints={{
                    500: {
                        slidesPerView: 1,
                        // spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1,
                        // spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1,
                        // spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 1,
                        // spaceBetween: 10,
                    },
                }}
            >
                <SwiperSlide>
                    <Image src="/gallery-1.png" alt="KSOM's gallery" width={1440} height={768} />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/gallery-2.png" alt="KSOM's gallery" width={1440} height={768} />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/gallery-3.png" alt="KSOM's gallery" width={1440} height={768} />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/gallery-4.png" alt="KSOM's gallery" width={1440} height={768} />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/gallery-5.png" alt="KSOM's gallery" width={1440} height={768} />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/gallery-6.png" alt="KSOM's gallery" width={1440} height={768} />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/gallery-7.png" alt="KSOM's gallery" width={1440} height={768} />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/gallery-8.png" alt="KSOM's gallery" width={1440} height={768} />
                </SwiperSlide>
            </Swiper>

            <div className="absolute w-full top-0 left-0 z-20">
                <Container>
                    <Navbar />
                </Container>
            </div>

            <div className='h-full w-full absolute top-0 left-0 z-20'>
                <div className="mt-14 h-full flex items-center justify-center">
                    <div className='w-[640px]'>
                        <h1 className="text-[56px] text-primary font-medium leading-[75px] text-center">
                            Empowering Bright Minds for a Better Tomorrow
                        </h1>
                        <p className="mt-4 leading-[30px] text-[22px] text-center text-primary">
                            Join a community dedicated to excellence, innovation, and lifelong learning. Your success starts here.
                        </p>

                        <div className="flex justify-center">
                            <Button className="mt-8" classType='primary'>Apply Now</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Container>
                <Navbar />

                <div className="mt-14 h-full flex items-center justify-center">
                    <div className='w-[640px]'>
                        <h1 className="text-[56px] text-primary font-medium leading-[75px] text-center">
                            Empowering Bright Minds for a Better Tomorrow
                        </h1>
                        <p className="mt-4 leading-[30px] text-[22px] text-center text-primary">
                        Join a community dedicated to excellence, innovation, and lifelong learning. Your success starts here.
                        </p>

                        <div className="flex justify-center">
                        <Button className="mt-8" classType='primary'>Apply Now</Button>
                        </div>
                    </div>
                </div>
            </Container> */}
        </header>
    )
}

export default Hero