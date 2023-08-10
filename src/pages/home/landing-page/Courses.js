import { Link } from "react-router-dom";

const Courses = () => {
    return (
        <div id="courses-section" className="courses">
            <div className="inner">
                <div className="courses__nav">
                    <Link to="" className="active" data-type="popular" title="Popular Courses" data-url="/courses" data-text="Explore More Courses"> Popular Courses <span></span></Link>
                    <Link to="" data-type="diploma" title="Top Diplomas" data-url="/diploma-courses"
                        data-text="Explore more Diploma courses"> Top Diplomas <span></span></Link>
                    <Link to="" data-type="certificate" title="Top Certificates" data-url="/certificate-courses" data-text="Explore more Certificate courses"> Top Certificates <span></span></Link>
                    <Link to="" data-type="released" title="New Courses" data-url="/courses" data-text="Explore more new courses"> New Courses <span></span></Link><span className="under"></span></div>
                <h3 style={{ display: "none" }}>Top Diplomas</h3>
                <ul className="courses__carousel"></ul>
                <h3 style={{ display: "none" }}>Top Certificates</h3>
                <div className="courses__cta" data-type="popular"><Link to="/courses" className="but but--outline ">Explore More Courses</Link></div>
        </div>
        </div>
    );
}

export default Courses;