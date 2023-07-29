// Components
import Intro from "../home/landing-page/Intro";
import Categories from "../home/landing-page/Categories";
import Goals from "./landing-page/Goals";
import Courses from "./landing-page/Courses";

// Styles
import "../../css/homepage.css";
import "../../css/homepage2.css";
import "../../css/homepage-lower.css";
import "../../css/iconfont.css";

const Hero = () => {
    return (
        <>
            <div id="homepage">
                <Intro />
                <Categories />
                <Goals />
                <Courses />
            </div>
       </> 
    );
}

export default Hero;