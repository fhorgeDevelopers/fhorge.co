import { Link } from "react-router-dom";

const Test = () => {
    return(
        <div className="tests">
        <div className="inner">
            <div className="tests__section">
                <div className="tests__img"><img className="lazyload" src="https://cdn01.alison-static.net/public/html/site/img/homepage/know-yourself.svg" /></div>
                <h3>Get to know yourself better!</h3>
                <p className="sub">Discover your career strengths & weaknesses</p><Link className="but" to="/psychometric-test/personality">Take The Free Personality Assessment</Link></div>
            <div className="tests__section">
                <div className="tests__img"><img className="lazyload" src="https://cdn01.alison-static.net/public/html/site/img/homepage/get-hired-alt.svg" /></div>
                <h3>Get hired for your dream job!</h3>
                <p className="sub">Build your free resumé in minutes!</p><Link className="but" to="https://fhorge.com/resume-builder">Create My Professional Resumé</Link></div>
        </div>
    </div>
    )
}

export default Test;