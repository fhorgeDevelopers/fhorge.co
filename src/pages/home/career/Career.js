import React from 'react'
import "../style/style.css"
// import '../../../css/earn-&-build.css'
import Navigation from '../../components/Navigation/Navigation';
import CareerBody from './CareerBody';
import Footer from '../../components/Footer/Footer';
import Switch from '../Switch.js';


const Career = () => {
    return (
        <>
            <Navigation />
            <Switch />
            <CareerBody />
            <Footer />
        </>
    )
}

export default Career;