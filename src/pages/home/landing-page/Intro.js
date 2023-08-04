import { useState } from "react";
import { useNavigate } from "react-router";
import Switch from "../Switch";

import Stats from "./Stats";
const Intro = () => {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/courses/query/${searchText}`)
    }
    return (
        <div class="intro">
            <div class="inner">
                <Switch />
                <h1>Free Online Courses for All</h1>
                <form id="home-header-search" class="home-search" method="GET" action="" accept-charset="UTF-8" autocomplete="off" onSubmit={(e) => handleSearch(e)}>
                    <input maxlength="200" id="autocomplete" class="autocomplete_field" name="query" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <span><span class="icon-search2"></span> What do you want to learn today? </span>
                </form>
                <div class="intro__images">
                    <span class="p-2 mb-4">
                        <img alt="img-1" class="lazyload w-100" src="https://cdn01.alison-static.net/public/html/site/img/homepage/banner-image.svg" />
                    </span>
                </div>
            </div>
            <Stats />
        </div>
    );
}

export default Intro;