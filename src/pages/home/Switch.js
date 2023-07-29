import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Switch = () => {
    const location = useLocation();
    return (
        <div className="tab-nav">
            <ul>
                <li className={`${location.pathname === '/' ? 'tab-nav__cta--active' : ''} tab-nav__cta `}>
                    <Link to="/">
                        Learn <span className="hide-on-mobile">&amp; Get Certificates</span>
                    </Link>
                </li>
                <li className={`${location.pathname === '/build-your-career' ? 'tab-nav__cta--active' : ''} tab-nav__cta `}>
                    <Link to="/build-your-career" title="Build Your Career">
                        <span className="hide-on-mobile">Build Your</span> Career
                    </Link>
                </li>
                <li className={`${location.pathname === '/earn-money' ? 'tab-nav__cta--active' : ''} tab-nav__cta `}>
                    <Link to="/earn-money" title="Earn On Fhorge">
                        Earn <span className="hide-on-mobile">On Fhorge</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Switch