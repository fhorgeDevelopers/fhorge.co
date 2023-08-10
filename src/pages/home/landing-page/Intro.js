import { useState } from "react";
import Switch from "../Switch";

import Stats from "./Stats";
const Intro = () => {
    const [searchText, setSearchText] = useState('')
    return (
        <div className="intro">
            <div className="inner">
                <Switch />
                <h1>Free Online Courses With Certificates & Diplomas</h1>
                <form id="home-header-search" className="home-search" method="GET" action="" accept-charset="UTF-8" autocomplete="off">
                    <input maxlength="200" id="autocomplete" className="autocomplete_field" name="query" type="text" value={searchText} />
                    <span><span className="icon-search2"></span> What do you want to learn today? </span>
                </form>
                <div className="intro__images">
                    <span className="p-2 mb-4">
                        <img alt="img-1" className="lazyload w-100" src="https://cdn01.alison-static.net/public/html/site/img/homepage/banner-image.svg" />
                    </span>
                </div>
            </div>
            <Stats />
        </div>
    );
}

export default Intro;