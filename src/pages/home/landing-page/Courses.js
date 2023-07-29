import { Link } from "react-router-dom";

const Courses = () => {
    return (
        <div id="courses-section" class="courses">
            <div class="inner">
                <div class="courses__nav">
                    <Link href="" class="active" data-type="popular" title="Popular Courses" data-url="/courses" data-text="Explore More Courses"> Popular Courses <span></span></Link>
                    <Link href="" data-type="diploma" title="Top Diplomas" data-url="/diploma-courses"
                        data-text="Explore more Diploma courses"> Top Diplomas <span></span></Link>
                    <Link href="" data-type="certificate" title="Top Certificates" data-url="/certificate-courses" data-text="Explore more Certificate courses"> Top Certificates <span></span></Link>
                    <Link href="" data-type="released" title="New Courses" data-url="/courses" data-text="Explore more new courses"> New Courses <span></span></Link><span class="under"></span></div>
                <h3 style={{ display: "none" }}>Top Diplomas</h3>
                <ul class="courses__carousel"></ul>
                <h3 style={{ display: "none" }}>Top Certificates</h3>
                <div class="courses__cta" data-type="popular"><Link href="/courses" class="but but--outline ">Explore More Courses</Link></div>
        </div>
        </div>
    );
}

export default Courses;