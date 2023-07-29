import { Link } from "react-router-dom";

import "../../css/homepage.css";
import "../../css/homepage-lower.css";

const Hero = () => {
    const boxes = [{
        img: "",
        text: "30 Million+",
        type: "Learners"
    }, {
        img: "",
        text: "6 Million+",
        type: "Graduates"
    }, {
        img: "",
        text: "195",
        type: "Countries"
    }]
    return (
        <main className="mt-4">
            <section className="">
                <div className="">
                    <div className="">
                        <Link className="" to=".">
                            <img src="" alt="" />
                            <span className="">Learn</span>
                        </Link>
                        <Link className="" to="/career">
                            <img src="" alt="" />
                            <span className="">Career</span>
                        </Link>
                        <Link className="" to="/earn-money">
                            <img src="" alt="" />
                            <span className="">Earn</span>
                        </Link>
                    </div>
                    <div className="">
                        <div className="">
                            <h1 className="">Free online courses with certificates & diplomas</h1>
                            <form action="">
                                <div className="">
                                    <img src="" alt="" />
                                    <input type="text" name="" 
                                        placeholder="What do you want to learn today"
                                        id="" 
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="">
                            {/* Mockup */}
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
            <section className="">
                <div className="">
                    <div className="">
                        {boxes.map((box) => (
                            <div key={box.text} className="hero-2-main-box">
                                <img src={box.img} alt="" />
                                <div className="hero-2-main-box-text">
                                    {box.text} <br /> <span className="hero-2-main-box-type">{box.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Hero;￼Enter
