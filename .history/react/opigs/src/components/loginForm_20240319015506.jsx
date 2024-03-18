
import './loginForm.css';
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
function LoginForm(){
    return(
        <div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                
                <div className="inputbox">
                    
                    <input type="text" placeholder='UserName' required></input>
                    <FaUserGraduate />
                </div>
                <div className="inputbox">
                    <input type="text" placeholder='Password' required></input>
                    <RiLockPasswordLine />
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