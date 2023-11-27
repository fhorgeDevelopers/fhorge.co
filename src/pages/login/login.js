import "./style.css";
import Google from "../../img/google.png";
import Facebook from "../../img/facebook.png";
import Lock from "../../img/lock.png";
import Hide from '../../img/icon_hide.svg'
import Show from '../../img/icon_show.svg'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="SignIn-section flex">
            <div className="SignIn flex">
                <div className="SignIn-inner flex">
                    <div className="SignIn-head flex">
                        <h3 className="null-btn flex">SIGN UP</h3>
                        <h3 className="curr-btn flex">LOGIN</h3>
                    </div>
                    <div className="SignIn-info flex">
                        <h2>Welcome Back!</h2>
                        <p>Let's get you logged in</p>
                        <div className="sign-with flex">
                            <Link to=" " className="flex"><img src={Google} alt="" className="google" />Login with Google</Link>
                            <Link to="" className="flex"><img src={Facebook} alt="" className="facebook" />Login with Facebook</Link>
                        </div>
                        <div className="or">OR</div>
                        <div className="form flex">
                            <form action="">
                                <div className="page-col col-up">
                                    <input className="page-field email" type="email" name="email" id="" placeholder="Enter your Email Address" />
                                </div>
                                <div className="page-col">
                                    <input className="page-field password" type="password" name="password" id="" placeholder="Enter your password" />
                                    <img src={Hide} alt="" className="page-toggle" />
                                </div>
                            </form>
                        </div>
                        <div className="forgot flex">
                            <Link to="">Forgot your password ?</Link>
                        </div>

                        <p className="click">By clicking “Get Started”, you agree to our Terms of Use and our Privacy Policy</p>

                        <button href="" className="start-btn flex">Login<img src={Lock} alt="" className="lock" /></button>
                        <p>Don’t have an account, <Link to="" className="create-one">Create one</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;