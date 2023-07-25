import React from 'react'
import { Helmet } from 'react-helmet';
import { useMode } from '../../providers/Mode';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

const Faq = () => {
    const mode = useMode();
    return (
        <>
            <Helmet>
                <title>
                    Frequently Asked Questions | Fhorge
                </title>
            </Helmet>
            <Navigation />

            <section className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`${mode.myMode === 'light' ? 'lightNav' : 'darkNav'} b-2`}>
                            <h2 className={`${(mode.myMode === "light") ? "textDark" : "textLight"} m-3 p-2`} style={{ height: '50vh'}}>
                                Frequently Asked Questions
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${mode.myMode === 'light' ? 'lightNav' : 'darkNav'} card w-100`} style={{ height: '50vh'}}>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${mode.myMode === 'light' ? 'lightNav' : 'darkNav'} card w-100`}>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Faq