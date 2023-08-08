import { Link } from "react-router-dom";

const Test = () => {
    return(
        <div class="tests">
        <div class="inner">
            <div class="tests__section">
                <div class="tests__img"><img class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/know-yourself.svg" /></div>
                <h3>Get to know yourself better!</h3>
                <p class="sub">Discover your career strengths & weaknesses</p><Link class="but" href="/psychometric-test/personality">Take The Free Personality Assessment</Link></div>
            <div class="tests__section">
                <div class="tests__img"><img class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/get-hired-alt.svg" /></div>
                <h3>Get hired for your dream job!</h3>
                <p class="sub">Build your free resumé in minutes!</p><Link class="but" href="https://alison.com/resume-builder">Create My Professional Resumé</Link></div>
        </div>
    </div>
    )
}

export default Test;