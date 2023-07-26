import React from 'react';
import { useMode } from '../../providers/Mode';
import style from './404.module.css';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import Preloader from '../../Preloader';
import { useState } from 'react';

const NotFound = () => {
    const mode = useMode();
    const [showLoader, setShowLoader] = useState(true);
    const location = useLocation();
    useEffect(() => {
        setShowLoader(true)
        setTimeout(() => {
            setShowLoader(false)
        }, 500);
    }, [location.key])
    return (
        <>
            <Helmet>
                <title>
                    Page not found | Fhorge
                </title>
            </Helmet>
            {showLoader ? <Preloader /> : null}
            <nav className={`${(mode.myMode === 'light' ? style.lightBox : style.darkBox)} d-flex justify-content-center align-items-center ${style.Nav}`}>
                <Link className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} navbar-item`} to={'/'} style={{ overflow: 'hidden' }} >
                    <img src={((mode.myMode === 'dark') ? "/logo_dark.png" : "/logo.png")} className={'site-icon'} alt={'Fhorge'} />
                </Link>
            </nav>
            <section
                className={`
            // ${(mode.myMode === 'dark' ? style.lightText : style.darkText)}
                m-3
            `}>
                <div className={`row justify-content-center`}>
                    <div className='col-md-8 text-center'>
                        <h2 className='text-center'>
                            PAGE NOT FOUND
                        </h2>
                        <Link to={'/'} className='btn btn-success mt-5'>
                            Back home
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default NotFound