import React from 'react'
import Navbar from '../components/widgets/Navbar'
import ApplicationHeader from '../components/widgets/Application/ApplicationHeader'
import ApplicationForm from '../components/widgets/Application/ApplicationForm'

const page = () => {
    return (
        <main>
            <Navbar />
            <ApplicationHeader />
            <ApplicationForm />
        </main>
    )
}

export default page