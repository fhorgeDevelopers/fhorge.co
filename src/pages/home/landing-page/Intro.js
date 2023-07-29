import { Link } from "react-router-dom";

import Stats from "./Stats";
const Intro = () => {
    return (
        <div class="intro">
            <div class="inner" style={{ paddingTop: "10px" }}>
                <div class="tab-nav">
                    <ul>
                        <li class="tab-nav__cta tab-nav__cta--active"><Link to="." title="Learn & Get Certificates"><span class="icon-banner-book"></span> Learn <span class="hide-on-mobile">& Get Certificates</span></Link></li>
                        <li class="tab-nav__cta "><Link title="Build Your Career" to="/career"><span class="icon-briefcase"></span><span class="hide-on-mobile">Build Your</span> Career </Link></li>
                        <li class="tab-nav__cta "><Link title="Earn On Alison" to="/earn"><span class="icon-banner-coins"></span> Earn <span class="hide-on-mobile">On Fhorge</span></Link></li>
                    </ul>
                </div>
                <h1>Free Online Courses With Certificates & Diplomas</h1>
                <form id="home-header-search" class="home-search" method="GET" action="" accept-charset="UTF-8" autocomplete="off">
                    <input maxlength="200" id="autocomplete" class="autocomplete_field" name="query" type="text" />
                    <span><span class="icon-search2"></span> What do you want to learn today? </span>
                </form>
                <div class="intro__images"><span class="hide-on-mobile">
                    <img alt="img-1" class="lazyload" width="1156" height="281" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/banner-image.svg" /></span><span class="hide-on-desktop"><div style={{ display: "flex", alignItems: "flex-end" }}>
                    <img alt="img-2" width="78px" height="150px" class="" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/banner-mobile.svg" src="https://cdn01.alison-static.net/public/html/site/img/homepage/home-1.svg" />
                    <img alt="img-3" style={{ marginTop: "24px" }} width="108px" height="121px" class="" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/banner-mobile.svg" src="https://cdn01.alison-static.net/public/html/site/img/homepage/home-2.svg" />
                    <img alt="img-4" style={{ marginTop: "16px" }} width="158px" height="126px" class="" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/banner-mobile.svg" src="https://cdn01.alison-static.net/public/html/site/img/homepage/home-3.svg" /></div></span></div>
            </div>
            <Stats />
        </div>
    );
}

export default Intro;