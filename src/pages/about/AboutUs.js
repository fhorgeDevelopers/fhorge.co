import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>
                    Our Story | Fhorge
                </title>
            </Helmet>
            <Navigation />
            <Footer />
        </>
    )
}

export default AboutUs