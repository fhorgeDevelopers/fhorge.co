import { Link } from "react-router-dom";

const Goalsbelow = () => {
    return (
        <div className="goalsbelow ">
            <div className="inner">
                <h2>Not sure where to begin? <span className="hide-on-mobile">What is your main goal on Fhorge?</span></h2>
                <h5 className="hide-on-desktop">What is your main goal on Fhorge?</h5>
                <div className="goals__container">
                    <Link to="/user/questionnaire?edit=false&goal=1" className="goal goal1 lazyload" data-bg="https://cdn01.alison-static.net/public/html/site/img/homepage/flag.svg"> I want to <br /><span>upskill</span>
                        <span className="arrow icon-carousel-arrow"></span>
                    </Link>
                    <Link to="/user/questionnaire?edit=false&goal=2" className="goal goal2 lazyload" data-bg="https://cdn01.alison-static.net/public/html/site/img/homepage/signpost.svg"> I want to <br /><span>change careers</span>
                        <span className="arrow icon-carousel-arrow"></span>
                    </Link>
                    <Link to="/user/questionnaire?edit=false&goal=3" className="goal goal3 lazyload" data-bg="https://cdn01.alison-static.net/public/html/site/img/homepage/jigsaw.svg"> I want to explore <br /><span>hobbies & interests</span>
                        <span className="arrow icon-carousel-arrow"></span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Goalsbelow;