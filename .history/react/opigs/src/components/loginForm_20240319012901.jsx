
import './loginForm.css'

function LoginForm(){
    return(
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoginForm;