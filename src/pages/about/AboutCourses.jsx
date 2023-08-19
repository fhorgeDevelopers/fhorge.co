import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import {PiCertificateFill} from 'react-icons/pi'
import {PiClockCountdown} from 'react-icons/pi'
import {RiGraduationCapFill} from 'react-icons/ri'
import {FaComment} from 'react-icons/fa'

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
                <div className={style.HeaderTextCont}>
                    <h1>About Fhorge Courses</h1>
                    <p>Fhorge offers over 4000 free online courses across nine distinct categories. The types of courses across the categories include: <br /><Link to='#'>Certificate Courses, and Diploma Courses</Link></p>
                </div>
            </div>
            <div className={style.aboutMiddleContainer}>
                <div className={style.aboutContent}>
                    <div className={style.firstCol}>
                        <div className={style.middleIcon}><PiCertificateFill size={70} /></div>
                        <h1>Certificate Courses</h1>
                        <p>Average time duration <b>2-3hr</b></p>
                        <div><PiClockCountdown size={100} /></div>
                        <p style={{fontSize:'small', lineHeight:"20px"}}>There are times when you may wish to specialise in a whole subject area, and there are times where you may prefer to gain critical knowledge of individual concepts within a subject area.
                        Alison’s Certificate courses will help you focus your learning on distinct topics, to provide you with specific expertise in your field or industry. By concentrating your energy on singular concepts, the niche skills you gain could set you apart from the rest.</p>
                        <p style={{fontSize:'small', lineHeight:"20px"}}>Our Certificate courses include an abundance of subjects, such as:
                            languages, media studies, journalism and public relations, health and fitness, business studies, computer programming and networking, and many more!
                        </p>
                        <button>See all certificate courses</button>
                    </div>


                    <div className={style.secondCol}>
                        <div className={style.middleIcon}><RiGraduationCapFill size={70} /></div>
                        <h1>Diploma Courses</h1>
                        <p>Average time duration <b>8-10hr</b></p>
                        <div><PiClockCountdown size={100} /></div>
                        <p style={{ fontSize: 'small', lineHeight: "20px" }}>
                            With the help of our intensive and comprehensive Diploma courses, you will gain valuable skills and training on key topics, all under one roof.
                            Diploma courses are specifically designed to give you a more extensive and thorough understanding of a subject area, by helping you master multiple concepts within a subject.
                        </p>
                        <p style={{ fontSize: 'small', lineHeight: "20px" }}>
                            Successfully completing an Alison Diploma course will give you an edge, and greatly enhance your employability and career prospects
                        </p>
                        <p style={{ fontSize: 'small', lineHeight: "20px" }}>
                        Our Diploma courses span a variety of professional subjects, such as:
                        workplace safety and health, business management and entrepreneurship, food safety, nursing and patient care, customer service, and much more!
                        </p>
                        <button>See all certificate courses</button>
                    </div>
                </div>
            </div>
            <div className={style.outcomeContainer}>
                    <p>To see why our learners enroll and certify in these courses, check out our main Graduate Outcomes, or read Testimonials directly from our graduates
                    </p>
                <div className={style.outcomeContent}>
                    <div>
                        <RiGraduationCapFill size={20} />
                        <Link to='#'><p>Discover Graduate Outcomes</p></Link>
                        <hr />
                    </div>
                    <div>
                        <FaComment size={20} />
                        <Link to='#'><p>Read Graduate Testimonials!</p></Link>
                        <hr />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AboutCourses