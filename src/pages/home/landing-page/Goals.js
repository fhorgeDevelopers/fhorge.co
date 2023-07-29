import { Link } from "react-router-dom";

const Goals = () => {
    return (
        <div class="goals goals--upper">
            <div class="inner">
                <h2>Not sure where to begin? <span class="hide-on-mobile">What is your main goal on Fhorge?</span></h2>
                <h5 class="hide-on-desktop">What is your main goal on Fhorge?</h5>
                <div class="goals__container">
                    <Link href="/user/questionnaire?edit=false&goal=1" class="goal lazyload" data-bg="https://cdn01.alison-static.net/public/html/site/img/homepage/flag.svg"> I want to <br /><span>upskill</span>
                        <span class="arrow icon-carousel-arrow"></span>
                    </Link>
                    <Link to="/user/questionnaire?edit=false&goal=2" class="goal lazyload" data-bg="https://cdn01.alison-static.net/public/html/site/img/homepage/signpost.svg"> I want to <br /><span>change careers</span>
                        <span class="arrow icon-carousel-arrow"></span>
                    </Link>
                    <Link to="/user/questionnaire?edit=false&goal=3" class="goal lazyload" data-bg="https://cdn01.alison-static.net/public/html/site/img/homepage/jigsaw.svg"> I want to explore <br /><span>hobbies & interests</span>
                        <span class="arrow icon-carousel-arrow"></span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Goals;