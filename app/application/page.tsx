import React from 'react'
import Navbar from '../components/widgets/Navbar'
import ApplicationHeader from '../components/widgets/Application/ApplicationHeader'
import ApplicationForm from '../components/widgets/Application/ApplicationForm'

const page = () => {
    return (
        <main>
            <Navbar />
            <div className='px-4 lg:px-0'>
                <ApplicationHeader />
                <ApplicationForm />
            </div>
        </main>
    )
}

export default page