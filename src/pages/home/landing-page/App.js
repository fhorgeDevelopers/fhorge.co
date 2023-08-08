import { Link } from "react-router-dom";

const App = () => {
return(
    <div class="app">
        <div class="inner lazyload" data-bg="https://cdn01.alison-static.net/public/html/site/img/homepage/app-mobile-bg.png">
            <div class="app__intro">
                <h3>The best place to learn? <br /> Wherever you are.</h3>
                <p class="sub">With the Fhorge App, you can learn no matter where you are. Download now to learn anything, anytime for free.</p>
                <div class="app__nav"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.alison.mobile.flutter&gl=IE"><img width="176" height="50" class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/android.png" alt="Download on Google Play" title="Download the alison app on Android" /></a>
                    <Link
                        target="_blank" href="https://apps.apple.com/us/app/alison-online-courses/id1558468968"><img width="176" height="50" class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/apple.png" alt="Download on the App Store" title="Download the alison app on iPhone" /></Link>
                </div>
                <p class="learners"><span>1 million+</span> learning on the Fhorge App</p>
            </div>
            <div class="app__img"><img class="lazyload" data-src="https://grandapihub.org.ng/html/app.jpg" alt="Fhorge app on your mobile phone" title="Download the alison app on Android or iPhone" /></div>
        </div>
    </div>
    
)
}
export default App;