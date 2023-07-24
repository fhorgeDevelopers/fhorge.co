import React, { useEffect, useState } from 'react';
import { useMode } from '../../../providers/Mode';
import '../../../css/main.css'

const Footer = () => {

    const mode = useMode();
    const [scrollNow, setScrollNow] = useState(false);

    const handleScroll = (event) => {
        if(window.scrollY > 60) {
            setScrollNow(true);
        } else {
            setScrollNow(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);
    return (
        <>
            <footer className={`${((mode.myMode === 'dark') ? "darkNav textLight" : "lightNav textDark")} main tpv2`}>
                <div class="main-bg">
                    <div className='ft-wrap'>
                        <div class="col col-1 col-a">
                            <div class="col-inner">
                                <div class="ft-column">
                                    <div class="ft-column-inner">
                                        <div class="footer_h3">FREE ONLINE COURSE CATEGORIES</div>
                                        <ul>
                                            <li>
                                                <a href="/courses/it" title=" IT Courses">IT </a>
                                            </li>
                                            <li>
                                                <a href="/courses/health" title=" Health Courses">Health </a>
                                            </li>
                                            <li>
                                                <a href="/courses/language" title=" Language Courses">Language </a>
                                            </li>
                                            <li>
                                                <a href="/courses/business" title=" Business Courses">Business </a>
                                            </li>
                                            <li>
                                                <a href="/courses/management" title=" Management Courses">Management </a>
                                            </li>
                                            <li>
                                                <a href="/courses/personal-development" title=" Personal Development Courses">Personal Development </a>
                                            </li>
                                            <li>
                                                <a href="/courses/marketing" title=" Sales &amp; Marketing Courses">Sales &amp;Marketing </a>
                                            </li>
                                            <li>
                                                <a href="/courses/engineering" title=" Engineering &amp; Construction Courses">Engineering &amp;Construction </a>
                                            </li>
                                            <li>
                                                <a href="/courses/education" title=" Teaching &amp; Academics Courses">Teaching &amp;Academics </a>
                                            </li>
                                            <li>
                                                <a href="/vertical/english">English</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-1 col-b">
                            <div class="col-inner">
                                <div class="ft-column">
                                    <div class="ft-column-inner">
                                        <div class="footer_h3">LEARN ABOUT Fhorge</div>
                                        <ul>
                                            <li>
                                                <a href="/about/how-it-works">How Fhorge Works</a>
                                            </li>
                                            <li>
                                                <a href="/about/about-fhorge-courses">About Fhorge Courses</a>
                                            </li>
                                            <li>
                                                <a href="/about/our-story">Our Story</a>
                                            </li>
                                            <li>
                                                <a href="/programmes">Fhorge Programmes</a>
                                            </li>
                                            <li>
                                                <a href="/publishers">Our Course Creators</a>
                                            </li>
                                            <li>
                                                <a href="/empower-us">Empower Fhorge</a>
                                            </li>
                                            <li>
                                                <a href="/about/pricing">Pricing</a>
                                            </li>
                                            <li>
                                                <a href="/index">Index</a>
                                            </li>
                                            <li>
                                                <a href="/about/careers">Open Positions</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-1 col-c">
                            <div class="col-inner">
                                <div class="ft-column">
                                    <div class="ft-column-inner">
                                        <div class="footer_h3">QUALITY FREE LEARNING</div>
                                        <ul>
                                            <li>
                                                <a href="/certificate-courses">All Certificates</a>
                                            </li>
                                            <li>
                                                <a href="/diploma-courses">All Diplomas</a>
                                            </li>
                                            <li>
                                                <a href="/hubs">Hubs</a>
                                            </li>
                                            <li>
                                                <a href="/about/accreditation">Accreditation</a>
                                            </li>
                                            <li>
                                                <a href="/graduate-outcomes">Graduate Outcomes</a>
                                            </li>
                                            <li>
                                                <a href="/testimonials">Fhorge Testimonials</a>
                                            </li>
                                            <li>
                                                <a title="Coronavirus Emergency - Free Course" href="/coronavirus">COVID19 Emergency Courses</a>
                                            </li>
                                            <li>
                                                <a href="/about/gopremium">Premium Learning</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-1 col-d">
                            <div class="col-inner">
                                <div class="ft-column">
                                    <div class="ft-column-inner">
                                        <div class="footer_h3">DISCOVER MORE</div>
                                        <ul>
                                            <li>
                                                <a href="/mobile/online-learning-app">Get the App</a>
                                            </li>
                                            <li>
                                                <a href="/careers">Discover Careers</a>
                                            </li>
                                            <li>
                                                <a href="/profile">Fhorge Profile</a>
                                            </li>
                                            <li>
                                                <a href="/resume-builder">Build Your Resumé</a>
                                            </li>
                                            <li>
                                                <a href="/psychometric-test/personality">Free Personality Test</a>
                                            </li>
                                            <li>
                                                <a href="/psychometric-test/wellbeing">Free Well-being Check up</a>
                                            </li>
                                            <li>
                                                <a href="/free-lms-programme">Fhorge for Business</a>
                                            </li>
                                            <li>
                                                <a href="/e-learning-africa">eLearning Africa</a>
                                            </li>
                                            <li>
                                                <a href="/media-centre">Media Centre</a>
                                            </li>
                                            <li>
                                                <a href="/blog">Blog</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-1 col-e">
                            <div class="col-inner">
                                <div class="ft-column">
                                    <div class="ft-column-inner">
                                        <div class="footer_h3">EARN ON Fhorge</div>
                                        <ul>
                                            <li>
                                                <a href="/publish/course-creator">Create Courses on Fhorge</a>
                                            </li>
                                            <li>
                                                <a href="/affiliates/learn-to-earn">Affiliate Programme</a>
                                            </li>
                                            <li>
                                                <a href="/referrals-programme/about">Refer a Friend</a>
                                            </li>
                                            <li>
                                                <a href="/webinars">Upcoming Webinars</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={`${((mode.myMode === 'light') ? "darkNav" : "lightNav")} ${scrollNow ? 'scroll-to-top' : 'd-none'} `} onClick={() => scrollToTop()}>
                            <span class="material-symbols-outlined">
                                {/* arrow_top */}
                                ^
                            </span>
                        </button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer