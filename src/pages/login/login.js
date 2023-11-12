import { Link } from "react-router-dom";

const Login = () => {
return(
    <div class="login-section flex">
      <div class="login flex">
        <div class="login-inner flex">
      <div class="login-head flex">
     <h3 class="sign flex">SIGN UP</h3>
       <h3 class="log flex">LOGIN</h3>
    </div>
    <div class="login-info flex">
    <h2>Welcome Back!</h2>
    <p>Let's get you logged in</p>
    <div class="sign-with flex">
    <Link to=" " class="flex"><img src="img/google.png" alt="" class="google"/>Login with Google</Link>
    <Link to="" class="flex"><img src="img/facebook.png" alt="" class="facebook"/>  Login with Facebook</Link>
    </div>
    <div class="or">OR</div>
    <div class="form flex">
    <form action="">
        <div class="page-col col-up">
            <input class="page-field email" type="email" name="email" id="" placeholder="Enter your Email"/>
        </div>
        <div class="page-col">
            <input class="page-field password" type="password" name="password" id="" placeholder="Create a password" />
            <img src="img/icon_hide.svg" alt="" class="page-toggle"/>
        </div>
    </form>
</div>
<div  class="forgot flex">
    <Link to="">Forgot your password ?</Link>
</div>

<p class="click">By clicking “Get Started”, you agree to our Terms of Use and our Privacy Policy</p>

<button href="" class="start-btn flex">Login<img src="img/lock.png" alt="" class="lock"/></button>
<p>Don’t have an account, <Link to="" class="create-one">Create one</Link></p>
        </div>
        </div>
    </div>
    </div>
)
}
export default Login;