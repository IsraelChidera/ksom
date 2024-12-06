import React from 'react'
import Container from '@/app/components/elements/Container';
import Navbar from '../Navbar';

const Hero = () => {
    return (
        <header className="h-screen bg-no-repeat bg-center bg-cover bg-[url('/bg.png')]">
            <Container>
                <Navbar />
            </Container>
        </header>
    )
}

export default Hero