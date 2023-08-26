import React from 'react'
import "../style/style.css"
import Navigation from '../../components/Navigation/Navigation';
import CareerBody from './CareerBody';
import Footer from '../../components/Footer/Footer';
import Switch from '../Switch.js';
import Careerss from "../landing-page/Careerss"
import Goals from "../landing-page/Goals"
import Goalsbelow from '../landing-page/Goalsbelow';
const Career = () => {
    return (
        <>
            <Navigation/>
            <Switch/>
            <CareerBody/>
            <Careerss/>
            <Goals/>
            <Goalsbelow/>
            <Footer />
        </>
    )
}

export default Career;