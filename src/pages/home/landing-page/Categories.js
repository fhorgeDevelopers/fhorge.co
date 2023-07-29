import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div class="categories">
            <div class="categories__bg"></div>
            <div class="inner">
                <h2>Explore <span class="fix-comma">4000</span>+ Free <span class="hide-on-mobile">Online</span> Courses</h2>
                <ul>
                    <li><Link to="/it" title="IT Courses"><img src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/it.svg" width="34" height="36" title="IT Courses" alt="IT Icon" /><h4>IT</h4><span class="course-amount"> 1,021 Courses <span class="icon-arrow-thin-right"></span></span></Link></li>
                    <li><Link to="/health" title="Health Courses"><img src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/health.svg" width="34" height="31" title="Health Courses" alt="Health Icon" /><h4>Health</h4><span class="course-amount"> 668 Courses <span class="icon-arrow-thin-right"></span></span></Link></li>
                    <li><Link to="/language" title="Language Courses"><img src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/language.svg" width="40" height="40" title="Language Courses" alt="Language Icon" /><h4>Language</h4><span class="course-amount"> 285 Courses <span class="icon-arrow-thin-right"></span></span></Link></li>
                    <li><Link to="/business" title="Business Courses"><img src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/business.svg" width="40" height="34" title="Business Courses" alt="Business Icon" /><h4>Business</h4><span class="course-amount"> 1,440 Courses <span class="icon-arrow-thin-right"></span></span></Link></li>
                    <li><Link to="/management" title="Management Courses"><img src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/management.svg" width="36" height="36" title="Management Courses" alt="Management Icon" /><h4>Management</h4><span class="course-amount"> 855 Courses <span class="icon-arrow-thin-right"></span></span></Link></li>
                    <li><Link to="/personal-development" title="Personal Development Courses"><img src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/personal-development.svg" width="28" height="35" title="Personal Development Courses" alt="Personal Development Icon" /><h4>Personal Development</h4><span class="course-amount"> 1,012 Courses <span class="icon-arrow-thin-right"></span></span></Link></li>
                    <li><Link to="/marketing" title="Sales &amp; Marketing Courses"><img src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/marketing.svg" width="32" height="28" title="Sales &amp; Marketing Courses" alt="Sales &amp; Marketing Icon" /><h4>Sales &amp; Marketing</h4><span class="course-amount"> 342 Courses <span class="icon-arrow-thin-right"></span></span></Link></li>
                    <li><Link to="/engineering" title="Engineering &amp; Construction Courses"><img src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/engineering.svg" width="30" height="34" title="Engineering &amp; Construction Courses" alt="Engineering &amp; Construction Icon" /><h4>Engineering &amp; Construction</h4><span class="course-amount"> 706 Courses <span class="icon-arrow-thin-right"></span></span></Link></li>
                    <li><Link to="/education" title="Teaching &amp; Academics Courses"><img src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/education.svg" width="44" height="38" title="Teaching &amp; Academics Courses" alt="Teaching &amp; Academics Icon" /><h4>Teaching &amp; Academics</h4><span class="course-amount"> 1,254 Courses <span class="icon-arrow-thin-right"></span></span></Link></li>
                    <li><Link to="/english" title="English Courses"><img class="" src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/english.svg" width="34" height="29" title="" alt="English Icon" /><h4>English</h4><span class="course-amount"> 55 Courses <span class="icon-arrow-thin-right"></span></span></Link></li>
                </ul>
                <div class="learning-counter" style={{ display: "none" }}><span class="bold users-here"></span> people are learning on Fhorge today </div>
            </div>
        </div>
    );
}

export default Categories;