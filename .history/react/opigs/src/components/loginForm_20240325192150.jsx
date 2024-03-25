
import './loginForm.css';
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link} from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";



function LoginForm(){
    const [Name, setName] = useState('');
    const [password, setPassword] = useState('');
  

    async function submit() {
      Name.preventDefault();
    //   try {
    //     await axios.post("http://localhost:3000/signUp", {
    //       Name: Name,
    //       password: password,
    //     });
    //   } catch (e) {
    //     console.log("Error", e.message);
    //   }

      try {
        const response = await axios.post("http://localhost:5000/users/login", {
          Name: Name,
          Password: password,
        });
        console.log(response.data); // Log response data
      } catch (error) {
        console.error("Error", error.message);
      }
    }

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         Name: '',
    //         password: ''
    //     }
    // }
    return(
        <div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                
                <div className="input-box">
                    
                    <input type="text" placeholder='UserName' onChange={(e)=>this.setName(e.target.value)} required></input>
                    <FaUserGraduate className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Password' onChange={(e)=>this.setPassword(e.target.value)} required></input>
                    <RiLockPasswordLine className='icon'/>
                </div>   
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" className='remember'/> Remember me
                        </label>
                    <a href='#'>Forgot Password?</a>
                </div>   
                <button type="submit" onClick={submit}>Sign IN</button>   
                <div className="signup">
                    <p>Don't have an account? <a href='/signUp'>Sign Up</a></p>
                    
                </div> 
            </form>
            <Link to='/signUp'>Sign IN</Link>
           
        </div>
    )
}
export default LoginForm;