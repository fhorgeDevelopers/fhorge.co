import React, { useEffect, useState } from 'react';
import { useMode } from '../../../providers/Mode';
import '../../../css/main.css'
import { Link } from 'react-router-dom';
import { useCalls } from '../../../providers/Calls';

const Footer = () => {
    const calls = useCalls();
    const mode = useMode();
    const [scrollNow, setScrollNow] = useState(false);

    const handleScroll = (event) => {
        if (window.scrollY > 60) {
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
                <div className="main-bg">
                    <div className='ft-wrap'>
                        <div className="col col-1 col-a">
                            <div className="col-inner">
                                <div className="ft-column">
                                    <div className="ft-column-inner">
                                        <div className="footer_h3">FREE ONLINE COURSE CATEGORIES</div>
                                        <ul>
                                            {
                                                calls.courses.length === 0 ? null : (
                                                    <>
                                                        {calls.courses.map((course) => (
                                                            <li key={course.id}>
                                                                <Link
                                                                    to={`/courses/${course.course_category.toLowerCase()}`}
                                                                    title={`${course.course_category}`}
                                                                >
                                                                    {course.course_category}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-1 col-b">
                            <div className="col-inner">
                                <div className="ft-column">
                                    <div className="ft-column-inner">
                                        <div className="footer_h3">LEARN ABOUT Fhorge</div>
                                        <ul>
                                            <li>
                                                <Link to="/about/how-it-works">How Fhorge Works</Link>
                                            </li>
                                            <li>
                                                <Link to="/about/about-fhorge-courses">About Fhorge Courses</Link>
                                            </li>
                                            <li>
                                                <Link to="/about/our-story">Our Story</Link>
                                            </li>
                                            <li>
                                                <Link to="/programmes">Fhorge Programmes</Link>
                                            </li>
                                            <li>
                                                <Link to="/publishers">Our Course Creators</Link>
                                            </li>
                                            <li>
                                                <Link to="/empower-us">Empower Fhorge</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col col-1 col-c">
                            <div className="col-inner">
                                <div className="ft-column">
                                    <div className="ft-column-inner">
                                        <div className="footer_h3">QUALITY FREE LEARNING</div>
                                        <ul>
                                            <li>
                                                <Link to="/certificate-courses">All Certificates</Link>
                                            </li>
                                            <li>
                                                <Link to="/diploma-courses">All Diplomas</Link>
                                            </li>
                                            <li>
                                                <Link to="/about/accreditation">Accreditation</Link>
                                            </li>
                                            <li>
                                                <Link to="/graduate-outcomes">Graduate Outcomes</Link>
                                            </li>
                                            <li>
                                                <Link to="/testimonials">Fhorge Testimonials</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col col-1 col-d">
                            <div className="col-inner">
                                <div className="ft-column">
                                    <div className="ft-column-inner">
                                        <div className="footer_h3">DISCOVER MORE</div>
                                        <ul>
                                            <li>
                                                <Link to="/careers">Discover Careers</Link>
                                            </li>
                                            <li>
                                                <Link to="/profile">Fhorge Profile</Link>
                                            </li>
                                            <li>
                                                <Link to="/resume-builder">Build Your Resumé</Link>
                                            </li>
                                            <li>
                                                <Link to="/psychometric-test/personality">Free Personality Test</Link>
                                            </li>
                                            <li>
                                                <Link to="/free-lms-programme">Fhorge for Business</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-1 col-e">
                            <div className="col-inner">
                                <div className="ft-column">
                                    <div className="ft-column-inner">
                                        <div className="footer_h3">EARN ON Fhorge</div>
                                        <ul>
                                            <li>
                                                <Link to="/publish/course-creator">Create Courses on Fhorge</Link>
                                            </li>
                                            <li>
                                                <Link to="/affiliates/learn-to-earn">Affiliate Programme</Link>
                                            </li>
                                            <li>
                                                <Link to="/referrals-programme/about">Refer a Friend</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={`${((mode.myMode === 'light') ? "darkNav" : "lightNav")} ${scrollNow ? 'scroll-to-top' : 'd-none'} `} onClick={() => scrollToTop()}>
                            <span className="material-symbols-outlined">
                                expand_less
                            </span>
                        </button>
                    </div><hr className="ft-hr" />
                    <div className="ft-b-wrap">
                        <div className="ft-b-wrap-col-1">
                            <div className="row-1">
                                <div className="logo-wrapper">
                                    <img width="141" height="48" style={{ transform: 'scaleY(3)' }} className="alison-logo lazyload" src={`${((mode.myMode === 'dark') ? "/logo_dark.png" : "/logo.png")}`} />
                                </div>
                                <ul>
                                    <li className="lazyload" data-bg="/faqs.svg">
                                        <Link to="/faqs">FAQs</Link>
                                    </li>
                                    <li className="lazyload" data-bg="/faqs.svg">
                                        <Link to="/contact-us">Customer Support</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='row-2'>
                                <ul>
                                    <li>
                                        <Link to="https://www.facebook.com/FhorgeOfficial" target="_blank" rel="nofollow">
                                            <img className="lazyload" src="/imgs/social/facebook.svg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/fhorge_official" target="_blank" rel="nofollow">
                                            <img className="lazyload" src="/imgs/social/twitter.svg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/company/fhorge" target="_blank" rel="nofollow">
                                            <img className="lazyload" src="/imgs/social/linkedin.svg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/fhorge_official/" target="_blank" rel="nofollow">
                                            <img className="lazyload" src="/imgs/social/instagram.svg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.tiktok.com/@fhorgeofficial" target="_blank" rel="nofollow">
                                            <img className="lazyload" src="/imgs/social/tiktok.svg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.youtube.com/" target="_blank" rel="nofollow">
                                            <img className="lazyload" src="/imgs/social/youtube.svg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://fhorge.quora.com/" target="_blank" rel="nofollow">
                                            <img className="lazyload" src="/imgs/social/quora.svg" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ft-b-wrap-col-2">
                            <hr className="ft-hr ft-hr--bottom" />
                            <div className="row-4 apps">
                                <Link to="https://apps.apple.com/" target="_blank">
                                    <img className="lazyload" width="156" height="48" src="/imgs/social/footer-desktop-appstore.svg" alt="Download on the App Store" title="Download the Fhorge app on iPhone" />
                                </Link>
                                <Link to="https://play.google.com/" target="_blank">
                                    <img className="lazyload" width="156" height="48" src="/imgs/social/footer-desktop-playstore.svg" alt="Download on Google Play" title="Download the Fhorge app on Android" />
                                </Link>
                            </div>
                            <div className="clearfix"></div>
                            <div className="row-5 policies">
                                <ul className="policies-list">
                                    <li className="icon-rights">
                                        <span>&copy;Fhorge 2023</span>
                                    </li>
                                    <li className="icon-rights">
                                        <Link to="/about/terms-of-use?privacy-policy" title="Fhorge Privacy Policy">Privacy</Link>
                                    </li>
                                    <li className="icon-rights">
                                        <Link to="/about/terms-of-use" title="Fhorge Terms and conditions">Terms</Link>
                                    </li>
                                    <li className="icon-rights">
                                        <Link className="cancel-scroll" to="/about/terms-of-use?privacy-policy#alison_cookie_policy" title="Fhorge Cookie Policy">Cookie Policy</Link>
                                    </li>
                                    <li className="icon-rights">
                                        <Link to="/sitemap" title="Fhorge Sitemap">Sitemap</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer