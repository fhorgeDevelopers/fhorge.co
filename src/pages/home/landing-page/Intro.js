import { useState } from "react";
import Switch from "../Switch";

import Stats from "./Stats";
import { useNavigate } from "react-router";
const Intro = () => {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const searchNow = (e) => {
        e.preventDefault();
        navigate(`/courses/query/${searchText}`)
    }
    return (
        <div className="intro">
            <div className="inner">
                <Switch />
                <h1>Free Online Courses With Certificates & Diplomas</h1>
                <form id="home-header-search" className="home-search" method="GET" action="" accept-charset="UTF-8" autocomplete="off" onSubmit={(e) => searchNow(e)}>
                    <input maxlength="200" id="autocomplete" className="autocomplete_field" name="query" onChange={(e) => setSearchText(e.target.value)} type="text" value={searchText} />
                    <span>
                        <span className="icon-search2"></span> What do you want to learn today?
                    </span>
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