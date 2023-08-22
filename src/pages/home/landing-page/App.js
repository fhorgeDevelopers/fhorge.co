import { Link } from "react-router-dom";

const App = () => {
return(
    <div className="app">
        <div className="inner lazyload" data-bg="https://cdn01.alison-static.net/public/html/site/img/homepage/app-mobile-bg.png">
            <div className="app__intro">
                <h3>The best place to learn? <br /> Wherever you are.</h3>
                <p className="sub">With the Fhorge App, you can learn no matter where you are. Download now to learn anything, anytime for free.</p>
                <div className="app__nav">
                    <Link target="_blank" to="#"><img width="176" height="50" className="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/android.png" alt="Download on Google Play" title="Download the Fhorge app on Android" /></Link>
                    <Link
                        target="_blank" to="#"><img width="176" height="50" className="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/apple.png" alt="Download on the App Store" title="Download the Fhorge app on iPhone" /></Link>
                </div>
                <p className="learners"><span>1 million+</span> learning on the Fhorge App</p>
            </div>
            <div className="app__img"><img className="lazyload" data-src="https://grandapihub.org.ng/html/app.jpg" alt="Fhorge app on your mobile phone" title="Download the Fhorge app on Android or iPhone" /></div>
        </div>
    </div>
    
)
}
export default App;