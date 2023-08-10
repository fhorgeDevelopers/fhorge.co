import React from 'react'

const Top = ({title}) => {
    return (
        <div className="banner-container ">
            <div className="banner">
                <figure className="bg-image">
                    <img src="/imgs/banner-bg.jpg" />
                </figure>
                <div className="banner-align align-parent">
                    <div className="align-center">
                        <div className="wrapper">
                            <div className="about-banner">
                                <h1>{title}</h1>
                                <p>
                                    Fhorge's career guide will help you discover more about your career path and identify the exact courses you need to excel in your career.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top