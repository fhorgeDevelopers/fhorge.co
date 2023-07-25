import React, { useEffect, useState } from 'react'
import { useMode } from '../../../providers/Mode';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useCalls } from '../../../providers/Calls';

const Navigation = () => {
    const calls = useCalls();
    const mode = useMode();
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const [showSubjectMenu, setShowSubjectMenu] = useState(false);
    const [showCourseMenu, setShowCourseMenu] = useState(false);
    const [seeSearch, setSeeSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const screenWidth = document.documentElement.clientWidth;
    const overlay = document.getElementById('overlay');
    const body = document.getElementsByTagName("body")[0];

    const toggleSearch = () => {
        if (seeSearch) {
            setSeeSearch(false)
        } else {
            setSeeSearch(true)
        }
        setSearchQuery('')
    }

    const toogleMenu = () => {
        if (showMenu) {
            setShowMenu(false)
        } else {
            setShowMenu(true);
        }
    }

    const toggleSubjectMenu = () => {
        if (showSubjectMenu) {
            setShowSubjectMenu(false)
            overlay.style.display = 'none'
            body.style.overflow = ""

        } else {
            setShowSubjectMenu(true)
            overlay.style.display = 'block'
            body.style.overflow = "hidden"

        }
        setShowCourseMenu(false)
    }

    const toggleCourseMenu = () => {
        if (showCourseMenu) {
            setShowCourseMenu(false)
            overlay.style.display = 'none'
            body.style.overflow = ""

        } else {
            setShowCourseMenu(true)
            overlay.style.display = 'block'
            body.style.overflow = "hidden"
        }
        setShowSubjectMenu(false)
    }

    const searchDB = (e) => {
        if (searchQuery === '') {
            return false;
        } else {

        }
    }

    const displayWindowSize = () => {
        if (screenWidth < 769) {
            setShowMenu(false)
        }
    }

    useEffect(() => {
        console.log(calls.careers)
    }, [calls.careers])

    useEffect(() => {
        setShowMenu(false);
        displayWindowSize();
        setShowSubjectMenu(false);
        setShowCourseMenu(false);


        const overlay = document.getElementById('overlay');
        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "";
        overlay.style.display = 'none'
        window.addEventListener("resize", displayWindowSize);
    }, [location.pathname])

    return (
        <>
            <Helmet>
                <link rel="icon" href={mode.changeIcon()} />
            </Helmet>
            <div className={seeSearch ? "row justify-content-center" : "d-none"}>
                <div className='col-lg-8'>
                    <div className='searchBox'>
                        <input
                            type={'text'}
                            name={'q'}
                            placeholder={'Search for anything'}
                            className={'headSearch form-control'}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className={'searchButton'}
                            onClick={(e) => {
                                searchDB(e)
                            }}
                        >
                            <span class="material-symbols-outlined" style={{ color: '#FD7702', }} >
                                search
                            </span>
                        </button>

                        <button
                            className={'closeSearch'}
                            onClick={() => toggleSearch()}
                        >
                            <span class="material-symbols-outlined" style={{ color: 'red', }} >
                                x
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav className={`${((mode.myMode === 'dark') ? "darkNav" : "lightNav")} navbar p-2 justify-content-start`} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} navbar-item`} to={'/'} style={{ overflow: 'hidden' }} >
                        <img src={((mode.myMode === 'dark') ? "/logo_dark.png" : "/logo.png")} className={'site-icon'} alt={'Fhorge'} />
                    </Link>

                    <Link role="button" className={`${showMenu ? 'is-active' : ''} ${((mode.myMode === 'dark') ? "textLight" : "textDark")} navbar-burger`} style={{ position: 'absolute', right: '15px' }} aria-label="menu" aria-expanded="false" onClick={toogleMenu} data-target="navbarBasicExample">
                        <span class="material-symbols-outlined p-3" >
                            {showMenu ? 'close' : 'menu'}
                        </span>
                    </Link>
                </div>

                <div id="navbarBasicExample" className={`${showMenu ? 'sm' : 'big'} ${mode.myMode} navbar-menu align-items-center d-flex justify-content-between m-2`}>
                    <div className={`navbar-start d-flex ${mode.myMode} ${showMenu ? 'no-border' : ''}`}>
                        <span
                            className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} m-0 d-flex align-items-center`}
                            style={{ position: 'relative' }}
                        >
                            <span
                                className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} navbar-item m-0 d-flex align-items-center`}
                                onClick={() => toggleSubjectMenu()}
                            >
                                Explore Diplomas and Certificates
                                <span className="material-symbols-outlined m-0">
                                    {showSubjectMenu ? 'arrow_drop_up' : 'arrow_drop_down'}
                                </span>
                            </span>
                            <section className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} ${showSubjectMenu ? 'd-block' : 'd-none'} navDrop`}>
                                <ul className='m-0 p-0' style={{ listStyle: 'none' }}>
                                    <li className="m-3 d-flex justify-content-between" >
                                        <span style={{ padding: '6px 10px', fontSize: '13px', }}>
                                            COURSE CATEGORIES
                                        </span>
                                        <Link to={'/courses'} style={{ padding: '6px 10px', fontSize: '13px', }}>
                                            View All
                                        </Link>
                                    </li>
                                    {
                                        calls.courses.length === 0 ? null : (
                                            <>
                                                {calls.courses.map((course) => (
                                                    <li key={course.id}>
                                                        <Link
                                                            to={`/courses/${course.course_category.toLowerCase()}`}
                                                            className={`dropLink d-flex justify-content-start align-items-center`}
                                                        >
                                                            <img src={course.course_category_image} alt={course.course_ref} className="navIcon2" />
                                                            <div>
                                                                <span className={(mode.myMode === 'light') ? "blackText" : "whiteText"} style={{ fontSize: '14px'}}>
                                                                    {course.course_category} &nbsp; ({course.course_count} courses)
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </>
                                        )
                                    }
                                </ul>
                            </section>
                        </span>

                        <span
                            className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} m-0 d-flex align-items-center`}
                            style={{ position: 'relative' }}
                        >
                            <span
                                className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} navbar-item m-0 d-flex align-items-center`}
                                onClick={() => toggleCourseMenu()}
                            >
                                Discover Careers
                                <span className="material-symbols-outlined m-0">
                                    {showCourseMenu ? 'arrow_drop_up' : 'arrow_drop_down'}
                                </span>
                            </span>
                            <section className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} ${showCourseMenu ? 'd-block' : 'd-none'} navDrop`}>
                                <ul className='m-0 p-0' style={{ listStyle: 'none' }}>
                                    <li className="m-3 d-flex justify-content-between" >
                                        <span style={{ padding: '6px 10px', fontSize: '13px', }}>
                                            EXPLORE CAREER CATEGORIES
                                        </span>
                                        <Link to={'/careers'} style={{ padding: '6px 10px', fontSize: '13px', }}>
                                            View All
                                        </Link>
                                    </li>
                                    {
                                        calls.careers.length === 0 ? null : (
                                            <>
                                                {calls.careers.map((career) => (
                                                    <li key={career.id}>
                                                        <Link
                                                            to={`/careers/${career.career_ref}`}
                                                            className={`dropLink d-flex justify-content-start`}
                                                        >
                                                            <img src={career.career_category_image} alt={career.career_ref} className="navIcon" />
                                                            <div>
                                                                <span className={(mode.myMode === 'light') ? "blackText" : "whiteText"}>
                                                                    {career.career_category}
                                                                </span>
                                                                <br />
                                                                <span className="whiteText">
                                                                    {career.career_count} careers
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </>
                                        )
                                    }
                                </ul>
                            </section>
                        </span>

                        <Link
                            to={'/'}
                            className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")}  ${location.pathname === '/business' ? 'active' : ''}  navbar-item m-0 d-flex align-items-center no-decoration`}
                        >
                            Fhorge for Business
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} navbar-item`}>
                            <div className="buttons d-flex m-0 align-items-center">
                                <span
                                    className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} ${location.pathname === '/sign-in' ? 'active' : ''} menuLink d-flex m-0 navBtn`}
                                    onClick={() => toggleSearch()}
                                    style={{ marginRight: '10px' }}
                                >
                                    <span className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} material-symbols-outlined m-0`}>
                                        search
                                    </span>
                                </span>
                                <button to={'/sign-in'} className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} btn  ${location.pathname === '/sign-in' ? 'active' : ''} menuLink d-flex m-0 navBtn`} style={{ marginRight: '10px' }}>
                                    <span className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} m-0`}>
                                        Sign in
                                    </span>
                                </button>
                                <span
                                    className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} menuLink modeChanger`}
                                    title={mode.myMode + " mode"}
                                    onClick={() => {
                                        mode.toggleMode();
                                    }}
                                    style={{ marginRight: '10px' }}
                                >
                                    {(mode.myMode === 'light') ? (
                                        <>
                                            <span class="material-symbols-outlined" style={{ color: '#FD7702', }} >
                                                star
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <>
                                                <span class="material-symbols-outlined" style={{ color: '#f2f2f2', }}>
                                                    dark_mode
                                                </span>
                                            </>
                                        </>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="overlay" style={{ display: 'none' }} className="overlay"></div>
        </>
    )
}

export default Navigation