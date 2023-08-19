import React from 'react'
import "../style/style.css"
// import "./style/home.css";
// import '../../../css/earn-&-build.css'
import Navigation from '../../components/Navigation/Navigation';
import CareerBody from './CareerBody';
import Footer from '../../components/Footer/Footer';
import Switch from '../Switch.js';
import Careerss from "../landing-page/Careerss"

const Career = () => {
    return (
        <>
            <Navigation />
            <Switch />
            <CareerBody />
            <Careerss/>
            <Footer />
        </>
    )
}

export default Career;