
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
            </form>
           
        </div>
    )
}
export default LoginForm;