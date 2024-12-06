import React from 'react'
import Container from '@/app/components/elements/Container';
import Button from '@/app/components/elements/Button';
import Navbar from '../Navbar';

const Hero = () => {
    return (
        <header className="h-screen bg-no-repeat bg-center bg-cover bg-[url('/bg.png')]">
            <Container>
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
            </Container>
        </header>
    )
}

export default Hero