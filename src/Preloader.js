import React from 'react';
import style from './preloader.module.css'
import Logo from './img/icon3.png';

const Preloader = () => {
    return (
        <>
            <div className={style.overlay}></div>
            <div className={style.overlayContent}>
                <div className={style.inOverlay}>
                    <img src={Logo} alt={'Fhorge'} />
                </div>
            </div>
        </>
    )
}

export default Preloader