import React, { useEffect, useState } from 'react'
import { useMode } from '../../../providers/Mode';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Navigation = () => {
    const mode = useMode();
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const [showSubjectMenu, setShowSubjectMenu] = useState(false);
    const [showCourseMenu, setShowCourseMenu] = useState(false);
    const [seeSearch, setSeeSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const screenWidth = document.documentElement.clientWidth;

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
        } else {
            setShowSubjectMenu(true)
        }
        setShowCourseMenu(false)
    }

    const toggleCourseMenu = () => {
        if (showCourseMenu) {
            setShowCourseMenu(false)
        } else {
            setShowCourseMenu(true)
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
        setShowMenu(false);
        displayWindowSize();
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
                                Subjects &nbsp;
                                <span className="material-symbols-outlined m-0">
                                    {showSubjectMenu ? 'expand_less' : 'expand_more'}
                                </span>
                            </span>
                            <section className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} ${showSubjectMenu ? 'd-block' : 'd-none'} navDrop`}>
                                <ul className='m-0 p-0' style={{ listStyle: 'none' }}>
                                    <li>
                                        <Link
                                            to={'/'}
                                            className={` dropLink`}
                                        >
                                            Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={'/'}
                                            className={` dropLink`}
                                        >
                                            Home Economics
                                        </Link>
                                    </li>
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
                                Courses  &nbsp;
                                <span className="material-symbols-outlined m-0">
                                    {showCourseMenu ? 'expand_less' : 'expand_more'}
                                </span>
                            </span>
                            <section className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} ${showCourseMenu ? 'd-block' : 'd-none'} navDrop`}>
                                <ul className='m-0 p-0' style={{ listStyle: 'none' }}>
                                    <li>
                                        <Link
                                            to={'/'}
                                            className={` dropLink`}
                                        >
                                            Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={'/'}
                                            className={` dropLink`}
                                        >
                                            Home Economics
                                        </Link>
                                    </li>
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
        </>
    )
}

export default Navigation