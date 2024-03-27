
// import './loginForm.css';
// import { FaUserGraduate } from "react-icons/fa";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { Link} from "react-router-dom";
// import React, { useState } from 'react';
// import axios from "axios";



// function LoginForm(){
//     const [Name, setName] = useState('');
//     const [password, setPassword] = useState('');
  

//     async function submit(e) {
//       e.preventDefault();
//     //   try {
//     //     await axios.post("http://localhost:3000/signUp", {
//     //       Name: Name,
//     //       password: password,
//     //     });
//     //   } catch (e) {
//     //     console.log("Error", e.message);
//     //   }

//       try {
//         const response = await axios.post("http://localhost:5000/users/login", {
//           Name: Name,
//           Password: password,
//         });
//         console.log(response.data); // Log response data
//       } catch (error) {
//         console.error("Error", error.message);
//       }
//     }

//     // constructor(props){
//     //     super(props)
//     //     this.state = {
//     //         Name: '',
//     //         password: ''
//     //     }
//     // }
//     return(
//         <div className='wrapper'>
//             <form action=''>
//                 <h1>Login</h1>
                
//                 <div className="input-box">
                    
//                     <input type="text" placeholder='UserName' onChange={(e)=>setName(e.target.value)} required></input>
//                     <FaUserGraduate className='icon'/>
//                 </div>
//                 <div className="input-box">
//                     <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required></input>
//                     <RiLockPasswordLine className='icon'/>
//                 </div>   
//                 <div className="remember-forgot">
//                     <label>
//                         <input type="checkbox" className='remember'/> Remember me
//                         </label>
//                     <a href='#'>Forgot Password?</a>
//                 </div>   
//                 <button type="submit" onClick={submit}>Sign IN</button>   
//                 <div className="signup">
//                     <p>Don't have an account? <a href='/signUp'>Sign Up</a></p>
                    
//                 </div> 
//             </form>
//             <Link to='/signUp'>Sign IN</Link>
           
//         </div>
//     )
// }
// export default LoginForm;


import './loginForm.css';
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";

function LoginForm() {
    const [Name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    // async function submit(e) {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:5000/users/login', {
    //             Name: Name,
    //             Password: password
    //         });
    //         console.log(response.data); // Log response data
    //     } catch (error) {
    //         console.error("Error", error.message);
    //     }
    // }
    async function submit(event) {
        event.preventDefault(); // Prevent form submission
    
        try {
            const response = await axios.post("http://localhost:5000/users/login", {
                Name: Name,
                Password: password,
            });
            console.log(response.data); // Log response data
    
            // If login is successful, redirect to '/Dashboard'
            if (response.status === 200) {
                window.location.href = '/Dashboard';
            }
        } catch (error) {
            console.error("Error", error.message);
        }
    }
    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }


    return (
        <div className='wrapper'>
            <form>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='UserName'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <FaUserGraduate className='icon' />
                </div>
                <div className="input-box">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <RiLockPasswordLine className='icon' />
                    <button type="button" className="show-password" onClick={toggleShowPassword}>
                        {showPassword ? 'Hide' : 'Show'} Password
                    </button>
                </div>
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
