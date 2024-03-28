import './loginForm.css';
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";
import CompanyList from './CompanyList';


function LoginForm() {
    const [Name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    async function submit(event) {
        event.preventDefault(); // Prevent form submission
    
        try {
            const response = await axios.post("http://localhost:5000/users/login", {
                Name: Name,
                Password: password,
            });
            console.log(response.data); // Log response data
            
            // If login is successful, redirect to '/:id/Dashboard'
            if (response.status === 200) {
                const id = await response.data._id;
                window.location.href = `/${id}/Dashboard`;
                <CompanyList></CompanyList>

            }
        } catch (error) {
            console.error("Error", error.message);
        }
    }
    
    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }
    return (
        <div className='wrapper'style={{display:"flex", left:"50%"}}> 
            <form>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='UserName'
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <FaUserGraduate className='icon' />
                </div>
                <div className="input-box">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <RiLockPasswordLine className='icon' />
                    <button type="button" className="show-password" onClick={toggleShowPassword}>
                        {showPassword ? 'Hide' : 'Show'} Password
                    </button>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" className='remember' /> Remember me
                    </label>
                    <a href='#'>Forgot Password?</a>
                </div>
                <button type="submit" onClick={submit}>Sign IN</button>
                <div className="signup">
                    <p>Don't have an account? <Link to='/signUp'>Sign Up</Link></p>
                </div>
            </form>

        </div>
    )
}
export default LoginForm;
