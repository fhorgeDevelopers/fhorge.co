import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import style from './ourstory.module.css'
import Card from './card'
import {FaUserGraduate} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>
                    Our Story | Fhorge
                </title>
            </Helmet>
            <Navigation />
            <div className={style.ourCoursesContainer}>
                <div className={style.courseHead}>
                    <h1>A Power for Good</h1>
                </div>
                <div className={style.coursTex}>
                    <p>
                        A Power for Good
                        We believe that free education, more than anything, has the power to break through boundaries and transform lives.
                    </p>

                    <p>
                    Alison is one of the world’s largest free learning platforms for education and skills training. It is a for-profit social enterprise dedicated to making it possible for anyone, to study anything, anywhere, at any time, for free online, at any subject level. Through our mission we are a catalyst for positive social change, creating opportunity, prosperity, and equality for everyone.
                    </p>
                </div>
            </div>
            <div className={style.ourValue}>
                <h1>Our values</h1>
                <div className={style.cardContainer}>
                    {/* still gooing to use s map to display card */}
                    <Card title='Empowerment' content='We are driven by our belief in the power of free education and skills training to change people’s lives for the better and are passionate about providing an overall learning experience that meets their needs and helps them to achieve life goals.' icon={<FaUserGraduate size={25} />} />
                    <Card title='Empowerment' content='We are driven by our belief in the power of free education and skills training to change people’s lives for the better and are passionate about providing an overall learning experience that meets their needs and helps them to achieve life goals.' icon={<FaUserGraduate size={25} />} />
                    <Card title='Empowerment' content='We are driven by our belief in the power of free education and skills training to change people’s lives for the better and are passionate about providing an overall learning experience that meets their needs and helps them to achieve life goals.' icon={<FaUserGraduate size={25} />} />
                    <Card title='Empowerment' content='We are driven by our belief in the power of free education and skills training to change people’s lives for the better and are passionate about providing an overall learning experience that meets their needs and helps them to achieve life goals.' icon={<FaUserGraduate size={25} />} />
                    </div>

            </div>
            <div className={style.middleContainer}>
                <div className={style.middleContent}>
                    <div className={style.imageCont}>
                        <img src="" alt="" className="" />
                    </div>
                    <div className={style.Content}>
                        <h1>The better we do, the more good we can do.</h1>
                        <p>Alison was founded in Galway, Ireland, in 2007 and has grown organically to become a major force in free online education and skills training. Today, with more than 30 million learners in 195 countries, Alison is changing how the world learns and up-skills.</p>
                        <p>Alison was founded in Galway, Ireland, in 2007 and has grown organically to become a major force in free online education and skills training. Today, with more than 30 million learners in 195 countries, Alison is changing how the world learns and up-skills.</p>
                        <p>Alison was founded in Galway, Ireland, in 2007 and has grown organically to become a major force in free online education and skills training. Today, with more than 30 million learners in 195 countries, Alison is changing how the world learns and up-skills.</p>
                    </div>
                </div>
                <div >
                </div>
            </div>
            <div className={style.lastContainer}>
                <div className={style.lastCont}>
                    <h1>Empower Yourself</h1>
                    <p>We believe that through education, everyone has the power to change their lives, and ultimately the world, for the better.</p>
                    <p>Innovation, technology and creative collaboration with knowledge experts worldwide are the foundations of Alison’s commitment to delivering universal access to education for free.</p>
                    <p>We believe that through education, everyone has the power to change their lives, and ultimately the world, for the better.</p>
                </div>
                <div className={style.cardContainer}>
                    {/* still gooing to use s map to display card */}
                    <Link to='#'><Card title='Visit our Blog!' content='Stories from Alison Graduates, Alison HQ and much more!' icon={<FaUserGraduate size={25} />} /></Link>
                    <Link to='#'><Card title='Visit our Blog!' content='Stories from Alison Graduates, Alison HQ and much more!' icon={<FaUserGraduate size={25} />} /></Link>
                    <Link to='#'><Card title='Visit our Blog!' content='Stories from Alison Graduates, Alison HQ and much more!' icon={<FaUserGraduate size={25} />} /></Link>
                    <Link to='#'><Card title='Visit our Blog!' content='Stories from Alison Graduates, Alison HQ and much more!' icon={<FaUserGraduate size={25} />} /></Link>
                   </div>


            </div>
            <Footer />
        </>
    )
}

export default AboutUs