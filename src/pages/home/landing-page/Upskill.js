import { Link } from "react-router-dom";

const Upskill = () => {
    return (
        <div class="upskill story">
            <div class="inner">
                <div class="story__img hide-on-mobile"><img data-srcset="https://cdn01.alison-static.net/public/html/site/img/homepage/upskill.png, https://cdn01.alison-static.net/public/html/site/img/homepage/upskill-2x.png 2x" class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/homepage/upskill.png"
                    title="A Faster Way For Your Employees To Grow And Upskill" /></div>
                <div class="story__intro">
                    <h2>A Faster Way For Your Employees To Grow And Upskill</h2><img width="287px" height="218px" data-srcset="https://cdn01.alison-static.net/public/html/site/img/homepage/upskill.png, https://cdn01.alison-static.net/public/html/site/img/homepage/upskill-2x.png 2x"
                        class="lazyload d-none" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/upskill.png" title="A Faster Way For Your Employees To Grow And Upskill"
                        //  style="display:none;" 
                         />
                    <p class="sub"> Our range of solutions has something to offer all businesses and organizations. Whether you’re a non-profit or a commercial entity, we can tailor a plan for your needs. </p><Link class="but but--outline" to="">Explore Fhorge For Business</Link></div>
            </div>
        </div>
    )
}
export default Upskill;