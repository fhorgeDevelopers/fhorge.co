import React from 'react';
import { useMode } from '../../providers/Mode';
import style from './404.module.css';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import Preloader from '../../Preloader';
import { useState } from 'react';
import { useCalls } from '../../providers/Calls';

const NotFound = () => {
    const mode = useMode();
    const [showLoader, setShowLoader] = useState(true);
    const location = useLocation();
    const calls = useCalls();

    useEffect(() => {
        setShowLoader(true);
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
                        <p>
                            We can't seem to find what you're looking for, but try searching from our courses.
                        </p>
                        <Link to={'/'} className='btn btn-success mt-5'>
                            Go Back home
                        </Link>
                        <div className='container mt-5'>
                            <div className='row'>
                                <div className='col-lg-12 text-center'>
                                    <h3>
                                        Browse various career categories
                                    </h3>
                                </div>
                                {calls.careerCategories.length === 0 ? null : (
                                    <>
                                        {calls.careerCategories.map((category) => (
                                            <Link to={`/careers/${category.career_category_id}`} class={`${(mode.myMode === 'dark' ? style.darkBox : style.lightBox)} ${style.media} media p-3 m-2 b-2`} key={category.id} style={{ width: 'fit-content' }}>
                                                <img src={category.image_url} class="align-self-center mr-2" style={{ width: '75px' }} />
                                                <div class="media-body align-self-center">
                                                    <h6>{category.career_category}</h6>
                                                </div>
                                            </Link>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default NotFound