
const login = () => {
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
    <a href="" class="flex"><img src="img/google.png" alt="" class="google"></img> Login with Google</a>
    <a href="" class="flex"><img src="img/facebook.png" alt="" class="facebook"></img>  Login with Facebook</a>
    </div>
    <div class="or">OR</div>
    <div class="form flex">
    <form action="">
        <div class="page-col col-up">
            <input class="page-field email" type="email" name="email" id="" placeholder="Enter your Email"> </input>
        </div>
        <div class="page-col">
            <input class="page-field password" type="password" name="password" id="" placeholder="Create a password"> </input>
            <img src="img/icon_hide.svg" alt="" class="page-toggle"></img>
        </div>
    </form>
</div>
        </div>
        </div>
    </div>
    </div>
)
}
export default login;