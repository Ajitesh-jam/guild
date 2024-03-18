
import './loginForm.css';

function LoginForm(){
    return(
        <div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                <div className="inputbox">
                    <input type="text" placeholder='UserName' required></input>
                </div>
                <div className="inputbox">
                    <input type="text" placeholder='Password' required></input>
                </div>   
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" name="remember" id="remember"/>Remember me
                    </label>
                    <a href='#'>Forgot Password?</a>
                </div>   
                <button type="submit" >Login</button>   
                <div className="signup">
                    <p>Don't have an account? <a href='#'>Sign Up</a></p>
                    
                </div> 
            </form>
           
        </div>
    )
}
export default LoginForm;