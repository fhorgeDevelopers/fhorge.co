import React from 'react'

const Top = ({title}) => {
    return (
        <div class="banner-container ">
            <div class="banner">
                <figure class="bg-image">
                    <img src="/imgs/banner-bg.jpg" />
                </figure>
                <div class="banner-align align-parent">
                    <div class="align-center">
                        <div class="wrapper">
                            <div class="about-banner">
                                <h1>{title}</h1>
                                <p>
                                    Fhorge’s career guide will help you discover more about your career path and identify the exact courses you need to excel in your career.
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