import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import style from './style.module.css'

const AboutCourses = () => {
    return (
        <>
        <Helmet>
            <title>
                Understand the types of courses offered on F | Fhorge
            </title>
        </Helmet>
            <Navigation />
            <div className={style.aboutHeader}>
                <div><h1>About Alison Courses</h1></div>
            </div>
            <div className={style.aboutMiddleContainer}>
                <div className={style.aboutContent}>
                    <div>
            
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AboutCourses