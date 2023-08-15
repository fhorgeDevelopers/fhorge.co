import React, { useEffect, useState } from 'react'
import { useMode } from '../../../providers/Mode';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useCalls } from '../../../providers/Calls';
import Preloader from '../../../Preloader';
import Style from './Navigation.module.css'

const Navigation = () => {
    const calls = useCalls();
    const mode = useMode();
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [showSubjectMenu, setShowSubjectMenu] = useState(false);
    const [showCourseMenu, setShowCourseMenu] = useState(false);
    const [seeSearch, setSeeSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const screenWidth = document.documentElement.clientWidth;
    const [showLoader, setShowLoader] = useState(true)
    const overlay = document.getElementById('overlay');
    const body = document.getElementsByTagName("body")[0];
    const [selected, setSelected] = useState('');
    const [seeAuth, setSeeAuth] = useState(false);

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
            setShowSubjectMenu(false)
            setShowCourseMenu(false)
            body.style.overflow = ""
        } else {
            setShowMenu(true);
            body.style.overflow = "hidden"
        }
    }

    const toogleAuth = (auth) => {
        setSeeAuth(true)
        setSelected(auth)
        body.style.overflow = "hidden"
        overlay.style.display = 'block'
    }

    const closeAuth = () => {
        setSeeAuth(false)
        setSelected("")
        body.style.overflow = ""
        overlay.style.display = 'none'
    }

    const toggleSubjectMenu = () => {
        if (showSubjectMenu) {
            setShowSubjectMenu(false)
            body.style.overflow = ""
            if (!showMenu) {
                overlay.style.display = 'none'
            }

        } else {
            setShowSubjectMenu(true)
            body.style.overflow = "hidden"
            if (!showMenu) {
                overlay.style.display = 'block'
            }
        }
        setShowCourseMenu(false)
    }

    const toggleCourseMenu = () => {
        if (showCourseMenu) {
            setShowCourseMenu(false)
            if (!showMenu) {
                overlay.style.display = 'none'
            }
            body.style.overflow = ""

        } else {
            setShowCourseMenu(true)
            if (!showMenu) {
                overlay.style.display = 'block'
            }
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

    const showLoginForm = (form) => {

    }

    const tutorNav = () => {
        if (selected === "register") {
            var link = 'https://tutor-fhorge.netlify.app/info'
        } else {
            var link = 'https://tutor-fhorge.netlify.app/' + selected
        }
        window.open(link, '_blank')
    }

    const studentNav = () => {
        let link = 'https://learn-fhorge.netlify.app/' + selected
        window.open(link, '_blank')
    }

    const employNav = () => {
        let link = 'https://hr-fhorge.netlify.app/' + selected
        window.open(link, '_blank')
    }


    useEffect(() => {
        setShowLoader(true)
        setTimeout(() => {
            setShowLoader(false)
        }, 1000);
    }, [location]);

    useEffect(() => {
        displayWindowSize();
        setShowSubjectMenu(false);
        setShowCourseMenu(false);
        if (showMenu) {
            toogleMenu()
        }


        document.getElementById('overlay').style.display = 'none'
        document.getElementsByTagName("body")[0].style.overflow = "";

        window.addEventListener("resize", displayWindowSize);
    }, [location.pathname]);

    return (
        <>
            <Helmet>
                <link rel="icon" href={mode.changeIcon()} />
            </Helmet>
            <div style={{ height: '60px', width: '100vw' }}></div>
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
                            <span className="material-symbols-outlined" style={{ color: '#FD7702', }} >
                                search
                            </span>
                        </button>

                        <button
                            className={'closeSearch'}
                            onClick={() => toggleSearch()}
                        >
                            <span className="material-symbols-outlined" style={{ color: 'red', }} >
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

                    <span role="button" className={`${showMenu ? 'is-active' : ''} ${((mode.myMode === 'dark') ? "textLight" : "textDark")} navbar-burger`} style={{ position: 'absolute', right: '15px' }} aria-label="menu" aria-expanded="false" onClick={toogleMenu} data-target="navbarBasicExample">
                        <span className="material-symbols-outlined p-3" >
                            {showMenu ? 'close' : 'menu'}
                        </span>
                    </span>
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
                            <section className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} ${showSubjectMenu ? 'd-block' : 'd-none'} navDrop ${showMenu ? 'sm' : 'big'} `}>
                                <li className="m-3 d-flex justify-content-between" >
                                    <span className='d-flex align-items-center' style={{ padding: '6px 10px', fontSize: '13px', }}>
                                        <span
                                            onClick={() => toggleSubjectMenu()}
                                            style={{ fontSize: '10px' }}
                                        >
                                            <span className={`${showMenu ? 'd-block ' : 'd-none'} material-symbols-outlined is-hoverable`}>
                                                chevron_left
                                            </span>
                                        </span>
                                        COURSE CATEGORIES
                                    </span>
                                </li>
                                <div style={{ overflowY: 'auto', height: '80%' }}>
                                    <ul className='m-0 p-0' style={{ listStyle: 'none' }}>
                                        {
                                            calls.courseCategories.length === 0 ? null : (
                                                <>
                                                    {calls.courseCategories.map((course) => (
                                                        <li key={course.id}>
                                                            <Link
                                                                to={`/courses/${course.course_category.toLowerCase()}`}
                                                                className={`dropLink d-flex justify-content-start align-items-center`}
                                                            >
                                                                <img src={course.course_category_image} alt={course.course_category_id} className="navIcon2" />
                                                                <div>
                                                                    <span className={(mode.myMode === 'light') ? "blackText" : "whiteText"} style={{ fontSize: '14px' }}>
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
                                </div>
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
                            <section className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} ${showCourseMenu ? 'd-block' : 'd-none'} navDrop ${showMenu ? 'sm' : 'big'} `}>
                                <li className="m-3 d-flex justify-content-between" >
                                    <span className='d-flex align-items-center' style={{ padding: '6px 10px', fontSize: '13px', }}>
                                        <span
                                            onClick={() => toggleCourseMenu()}
                                            style={{ fontSize: '10px' }}
                                        >
                                            <span className={`${showMenu ? 'd-block ' : 'd-none'} material-symbols-outlined is-hoverable`}>
                                                chevron_left
                                            </span>
                                        </span>
                                        EXPLORE CAREER CATEGORIES
                                    </span>
                                    <Link to={'/careers'} style={{ padding: '6px 10px', fontSize: '13px', }}>
                                        View All
                                    </Link>
                                </li>
                                <div style={{ overflowY: 'auto', height: '80%' }}>
                                    <ul className='m-0 p-0' style={{ listStyle: 'none' }}>
                                        {
                                            calls.careerCategories.length === 0 ? null : (
                                                <>
                                                    {calls.careerCategories.map((career) => (
                                                        <li key={career.id}>
                                                            <Link
                                                                to={`/careers/${career.career_category_id}`}
                                                                className={`dropLink d-flex justify-content-start`}
                                                            >
                                                                <img src={career.career_category_image} alt={career.id} className="navIcon" />
                                                                <div>
                                                                    <span className={(mode.myMode === 'light') ? "blackText" : "whiteText"}>
                                                                        {career.career_category}
                                                                    </span>
                                                                    <br />
                                                                    <span className={(mode.myMode === 'light') ? "blackText" : "greyText"}>
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
                                </div>
                            </section>
                        </span>

                        <Link
                            to={'/'}
                            className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")}  ${location.pathname === '/business' ? 'active' : ''}  navbar-item m-0 d-flex align-items-center no-decoration`}
                        >
                            Fhorge for Business
                        </Link>
                    </div>
                    <div className={`${showMenu ? 'sm' : ''} navbar-end `}>
                        <div className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} navbar-item`}>
                            <div className="buttons d-flex m-0 align-items-center">
                                {/* <span
                                    className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} ${location.pathname === '/sign-in' ? 'active' : ''} menuLink d-flex m-0 navBtn`}
                                    onClick={() => toggleSearch()}
                                    style={{ marginRight: '10px' }}
                                >
                                    <span className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} material-symbols-outlined m-0`}>
                                        search
                                    </span>
                                </span> */}
                                <button onClick={showLoginForm('login')} className={`${((mode.myMode === 'light') ? "textDark" : "textLight")}  ${location.pathname === '/sign-in' ? 'active' : ''} menuLink d-flex navBtn`} style={{ marginRight: '10px' }}>
                                    <span className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} m-0`} onClick={() => toogleAuth('login')} >
                                        Sign in
                                    </span>
                                </button>
                                <button to={'/sign-up'} className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} ${location.pathname === '/sign-in' ? 'active' : ''} menuLink d-flex navBtn`} style={{ background: '#198754!important' }}>
                                    <span className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} m-0`} onClick={() => toogleAuth('register')}>
                                        Sign up
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
                                            <span className="material-symbols-outlined" style={{ color: '#FD7702', }} >
                                                star
                                            </span>
                                            <span
                                                className={`${showMenu ? 'sm' : 'big'} `}
                                                style={{ color: '#FD7702', }}
                                            >
                                                Light Mode
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <>
                                                <span className="material-symbols-outlined" style={{ color: '#f2f2f2', }}>
                                                    dark_mode
                                                </span>
                                                <span
                                                    className={`${showMenu ? 'sm' : 'big'} `}
                                                    style={{ color: '#f2f2f2', }}
                                                >
                                                    Dark Mode
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
            <div
                id="overlay"
                // style={{ display: 'none' }}
                className={`overlay ${showMenu ? 'sm' : null}`}
                onClick={() => {
                    setShowSubjectMenu(false)
                    setShowCourseMenu(false)
                    setSeeAuth(false)
                    setSelected('');
                    overlay.style.display = 'none'
                    body.style.overflow = ""
                }}
            ></div>

            <div className={`${seeAuth ? "d-flex" : "d-none"} ${((mode.myMode === 'dark') ? "darkNav" : "lightNav")} ${Style.loginModal}`}>
                <div className={` ${Style.loginLeft}`}>
                    <ul className={`${Style.loginModalList}`}>
                        <li className={`${selected === 'login' ? `${Style.selected}` : null}`} onClick={() => setSelected('login')}>
                            SIGN IN
                        </li>
                        <li className={`${selected === 'register' ? `${Style.selected}` : null}`} onClick={() => setSelected('register')}>
                            SIGN OUT
                        </li>
                    </ul>
                </div>
                <div className={Style.loginRight}>
                    <div className={Style.closeAuth} onClick={() => closeAuth()}>
                        X
                    </div>
                    <h4 className='text-center card-title mb-3'>
                        {selected === 'login' ? (
                            <>
                                PLEASE CONTINUE TO SIGN IN
                            </>
                        ) : (
                            <>
                                SIGN UP FOR FREE
                            </>
                        )}
                    </h4>
                    <ul className={`${Style.loginModalList}`}>
                        <li className='btn btn-primary' onClick={() => studentNav()}>
                            LEARNER
                        </li> <br />
                        <li className='btn btn-primary' onClick={() => tutorNav()}>
                            TUTOR
                        </li> <br />
                        <li className='btn btn-primary' onClick={() => employNav()}>
                            EMPLOYER
                        </li>
                    </ul>

                </div>
            </div>

            {showLoader ? <Preloader /> : null}
        </>
    )
}

export default Navigation