import { Link } from "react-router-dom";

const CareerBody = () => {
    return (
        <div id="main-holder">
        <div className="intro build-intro">
            <div className="intro__header-outer">
                <h1>Build Your Career In <span>3 Easy Steps</span></h1>
            </div>
            <div className="steps">
                <Link to="#" title="Fhorge's Workplace Personality Assessment" className="stepp">
                    <div className="step__img">
                    <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/step-1-mobile.svg" media="(min-width: 768px)" alt="" />
                    </div>
                    <div className="step__desc"><span className="hide-on-mobile"><span className="bold">1. </span> Discover your strengths with <span className="bold">Fhorge's Workplace Personality Assessment</span><span className="icon-carousel-arrow"></span></span><span className="hideit-on-desktop bold"
                            style={{ display: "none" }}> Discover your strengths and weaknesses <span className="icon-filter_up"></span></span>
                    </div>
                </Link>
                <Link to="#" title="Find your perfect career." className="stepp">
                    <div className="step__img">
                    <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/step-2-mobile.svg" alt="" />
                    </div>
                    <div className="step__desc"><span className="hide-on-mobile"><span className="bold">2. Find your perfect career.</span> Explore 850+ career paths with related courses <span className="icon-carousel-arrow"></span></span><span className="hideit-on-desktop bold" style={{display: "none"}}> Explore 850+ careers and courses <span class="icon-filter_up"></span></span>
                    </div>
                </Link>
                <Link to="#" title="Create a job-winning resumé" className="stepp">
                    <div className="step__img">
                    <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/step-3-mobile.svg" alt="" />
                    </div>
                    <div className="step__desc"><span className="hide-on-mobile"><span className="bold">3. </span> Create a <span className="bold">job-winning Resumé</span> with Fhorge’s Resumé Builder and apply for your dream job <span className="icon-carousel-arrow"></span></span><span className="hideit-on-desktop bold"
                            style={{display: "none"}} > Create a job-winning resumé <span className="icon-filter_up"></span></span>
                    </div>
                </Link>
            </div>
        </div>
        <div className="paths">
            <div className="inner">
                <div class="path">
                    <div className="path__intro">
                        <h2>Free Personality Assessment,<br></br>Understand Who You Truly Are!</h2><img style={{display: "none"}}  width="449" height="318" className="lazyload" data-srcset="https://cdn01.alison-static.net/public/html/site/img/homepage/path-1.png, /html/site/img/homepage/path-1@2x.png 2x"
                            data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/path-1.png" title="Free Personality Assessment, Understand Who You Truly Are!" alt="Free Personality Assessment, Understand Who You Truly Are!" />
                        <p className="sub">
                        Fhorge’s free Workplace Personality Assessment gives you a simple scientific report of your top skills & strengths in just 12 minutes.<span className="ellipsis">...</span><span class="read-more-hide"> Take the recommended free courses to boost your strengths!</span>
                            <span
                                className="read-more-button">Read More</span>
                        </p><Link to="#" title="Start Your Free Personality Assessment" className="but"> Start Your Free Personality Assessment </Link>
                        </div>
                    <div className="path__img"><img width="449" height="318" className="lazyload" data-srcset="https://cdn01.alison-static.net/public/html/site/img/homepage/path-1.png, /html/site/img/homepage/path-1@2x.png 2x" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/path-1.png"
                            title="Free Personality Assessment, Understand Who You Truly Are!" alt="Free Personality Assessment, Understand Who You Truly Are!" /></div>
                </div>
                
                <div className="path path--right">
                    <div className="path__intro">
                        <h2>Fast Track Your Career <br></br>With Fhorge's Career Guide</h2><img style={{display: "none"}}  width="449" height="344" className="lazyload" data-srcset="https://cdn01.alison-static.net/public/html/site/img/homepage/path-2.png, /html/site/img/homepage/path-2@2x.png 2x"
                            data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/path-1.png" title="Fast Track Your Career With Fhorge's Career Guide" alt="Fast Track Your Career With Fhorge's Career Guide" />
                        <p className="sub"> From software developer and business manager to head nurse and chef, browse 850+ exciting careers and the courses you need to<span className="ellipsis">...</span><span className="read-more-hide"> achieve them. Discover all you need to know about job responsibilities, the experience you require, and get suggested courses to learn the skills to succeed!</span>
                            <span className="read-more-button">Read More</span>
                        </p><Link to="https://fhorge.co/careers" title="Discover Careers Now" className="but"> Discover Careers Now </Link>
                        </div>
                    <div className="path__img"><img width="449" height="344" className="lazyload" data-srcset="https://cdn01.alison-static.net/public/html/site/img/homepage/path-2.png, /html/site/img/homepage/path-2@2x.png 2x" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/path-1.png"
                            title="Fast Track Your Career With Fhorge's Career Guide" alt="Fast Track Your Career With Fhorge's Career Guide" /></div>
                </div>
                <div className="path">
                    <div className="path__intro">
                        <h2>Get Hired, Create a <br></br>Job-Winning Resumé</h2><img  style={{display: "none"}} width="589" height="322" className="lazyload" data-srcset="https://cdn01.alison-static.net/public/html/site/img/homepage/path-3.png, /html/site/img/homepage/path-3@2x.png 2x"
                            data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/path-3.png" title="Get Hired, Create a Job-Winning Resumé" alt="Get Hired, Create a Job-Winning Resumé" />
                        <p className="sub"> Create a <span class="bold">job-winning Resumé</span> with Fhorge’s Resumé Builder and apply for your dream job </p>
                        <Link to="#" title="Create My Professional Resumé" className="but"> Create My Professional Resumé </Link>
                        </div>
                    <div
                        className="path__img"><img width="589" height="322" className="lazyload" data-srcset="https://cdn01.alison-static.net/public/html/site/img/homepage/path-3.png, /html/site/img/homepage/path-3@2x.png 2x" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/path-3.png"
                            title="Get Hired, Create a Job-Winning Resumé" alt="Get Hired, Create a Job-Winning Resumé" /></div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default CareerBody;