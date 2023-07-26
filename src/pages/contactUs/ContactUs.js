import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { useMode } from '../../providers/Mode'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation';
import ContactIcon from '../../img/contact.svg'
import LocationIcon from '../../img/location.svg'

const ContactUs = () => {
    const mode = useMode();
    return (
        <>
            <Helmet>
                <title>
                    Contact Us | Fhorge
                </title>
            </Helmet>
            <Navigation />

            <section className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`${mode.myMode === 'light' ? 'lightNav' : 'darkNav'} b-2`}>
                            <h2 className={`${(mode.myMode === "light") ? "textDark" : "textLight"} m-3 p-2`}>
                                Get in touch
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-3">
                        <div className={`${mode.myMode === 'light' ? 'lightNav' : 'darkNav'} p-3 b-2 w-100`} style={{ height: '50vh' }}>
                            <div className='d-flex m-3'>
                                <img src={ContactIcon} alt='1' width={50} height={50} />
                                <div style={{ marginLeft: '20px' }}>
                                    <h5>
                                        Contact Information
                                    </h5>
                                    <p style={{ lineHeight: '20px' }}>
                                        For general and support queries please use <Link to="mailto:support@fhorge.co">support@fhorge.co</Link>, and one of our team will be happy to help.
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex m-3'>
                                <img src={LocationIcon} alt='1' width={50} height={50} />
                                <div style={{ marginLeft: '20px' }}>
                                    <h5>
                                        Location
                                    </h5>
                                    <p style={{ lineHeight: '20px' }}>
                                        Fhorge Inc.<br />
                                        Industrial Estate, <br />
                                        Lagos, <br />
                                        Nigeria. <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-3">
                        <div className={`${mode.myMode === 'light' ? 'lightNav' : 'darkNav'} b-2 w-100`} style={{ height: '50vh' }}>
                            <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3273641985325!2d3.355492074624245!3d6.60618112219776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9235c77deaad%3A0x9d444807220e81aa!2sIndustrial%20Estate%20Rd%2C%20Allen%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1690397434452!5m2!1sen!2sng" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default ContactUs