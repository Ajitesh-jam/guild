
// import './loginForm.css';
// import { FaUserGraduate } from "react-icons/fa";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { Link} from "react-router-dom";
// import React, { useState } from 'react';
// import axios from "axios";
// import { Authenticate } from './signByMongo';

// import router from './routes/user.route';

// function LoginForm(){
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     async function submit() {
//     //   email.preventDefault();
//     //   try {
//     //     await axios.post("http://localhost:3000/signUp", {
//     //       email: email,
//     //       password: password,
//     //     });
//     //   } catch (e) {
//     //     console.log("Error", e.message);
//     //   }
//     Authenticate()

//     }
//     return(
//         <div className='wrapper'>
//             <form action=''>
//                 <h1>Login</h1>
                
//                 <div className="input-box">
                    
//                     <input type="text" placeholder='UserName' required></input>
//                     <FaUserGraduate className='icon'/>
//                 </div>
//                 <div className="input-box">
//                     <input type="text" placeholder='Password' required></input>
//                     <RiLockPasswordLine className='icon'/>
//                 </div>   
//                 <div className="remember-forgot">
//                     <label>
//                         <input type="checkbox" className='remember'/> Remember me
//                         </label>
//                     <a href='#'>Forgot Password?</a>
//                 </div>   
//                 <button type="submit" >Login</button>   
//                 <div className="signup">
//                     <p>Don't have an account? <a href='/signUp'>Sign Up</a></p>
                    
//                 </div> 
//             </form>
//             <button className='submit' onClick={submit}>Login</button>
           
//         </div>
//     )
// }
// export default LoginForm;


import { useState } from 'react';
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Authenticate } from './yourAuthFile'; // Assuming your authentication file is named 'yourAuthFile.js'

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    async function submit() {
        try {
            await Authenticate(email, password); // Pass email and password to Authenticate function
        } catch (e) {
            console.log("Error", e.message);
        }
    }

    return(
        <div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                
                <div className="input-box">
                    <input type="text" placeholder='UserName' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <FaUserGraduate className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <RiLockPasswordLine className='icon'/>
                </div>   
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" className='remember'/> Remember me
                    </label>
                    <a href='#'>Forgot Password?</a>
                </div>   
                <button type="button" onClick={submit}>Login</button>   
                <div className="signup">
                    <p>Don't have an account? <a href='/signUp'>Sign Up</a></p>
                </div> 
            </form>
        </div>
    )
}

export default LoginForm;
