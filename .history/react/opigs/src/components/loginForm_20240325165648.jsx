
import './loginForm.css';
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link} from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";



function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    async function submit() {
      email.preventDefault();
      try {
        await axios.post("http://localhost:3000/signUp", {
          email: email,
          password: password,
        });
      } catch (e) {
        console.log("Error", e.message);
      }
    }

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         email: '',
    //         password: ''
    //     }
    // }
    return(
        <div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                
                <div className="input-box">
                    
                    <input type="text" placeholder='UserName' required></input>
                    <FaUserGraduate className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Password' required></input>
                    <RiLockPasswordLine className='icon'/>
                </div>   
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" className='remember'/> Remember me
                        </label>
                    <a href='#'>Forgot Password?</a>
                </div>   
                <button type="submit" >Sign IN</button>   
                <div className="signup">
                    <p>Don't have an account? <a href='/signUp'>Sign Up</a></p>
                    
                </div> 
            </form>
            <Link to='/signUp'>Sign IN</Link>
           
        </div>
    )
}
export default LoginForm;