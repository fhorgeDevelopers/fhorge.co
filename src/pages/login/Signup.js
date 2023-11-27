import "./style.css";
import Google from "../../img/google.png";
import Facebook from "../../img/facebook.png";
import Lock from "../../img/lock.png";
import Hide from '../../img/icon_hide.svg';
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="SignIn-section flex">
            <div className="SignIn flex">
                <div className="SignIn-inner flex">
                    <div className="SignIn-head flex">
                        <h3 className="curr-btn flex">SIGN UP</h3>
                        <h3 className="null-btn flex">LOGIN</h3>
                    </div>
                    <div className="SignIn-info flex">
                        <h2>Create your account!</h2>
                        <p>Build skills, grade your skills and get employed</p>
                        <div className="sign-with flex">
                            <Link to=" " className="flex"><img src={Google} alt="" className="google" />Sign up with Google</Link>
                            <Link to="" className="flex"><img src={Facebook} alt="" className="facebook" />Sign up with Facebook</Link>
                        </div>
                        <div className="or">OR</div>
                        <div className="form flex">
                            <form action="">
                                <div className="page-col col-up">
                                    <input className="page-field email" type="text" name="first-name"
                                    id="" placeholder="Enter your first name" required/>
                                </div>
                                <div className="page-col col-up">
                                    <input className="page-field textl" type="text" name="last-name" id="" placeholder="Enter your last name" />
                                </div>
                                <div className="page-col col-up">
                                    <input className="page-field textl" type="email" name="email" id="" placeholder="Enter your email" />
                                </div>
                                <div className="page-col">
                                    <input className="page-field password" type="password" name="password" id="" placeholder="Create a password" />
                                    <img src={Hide} alt="" className="page-toggle" />
                                </div>
                            </form>
                        </div>
                        <p className="click click-up">By clicking “Get Started”, you agree to our Terms of Use and our Privacy Policy</p>

                        <button href="" className="start-btn btn_below flex">Get Started<img src={Lock} alt="" className="lock" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;