import '../styles/login.css'
import { Link } from "react-router-dom"
function Login() {
    return (
        <>
            <div className='login-main-container'>
                <div className="login-container">
                    <form className="login-form">
                        <h1>Welcome Back</h1>
                        <p>Please login to your account</p>
                        <div className="input-group">
                            <input type="text" id="username" name="username" placeholder="Username" required />
                        </div>
                        <div className="input-group">
                            <input type="password" id="password" name="password" placeholder="Password" required />
                        </div>

                        <Link to="/home">
                            <button type="submit" routerLink>Login</button>
                        </Link>
                        <div className="bottom-text">
                            <p>Don't have an account? <a href="#">Sign Up</a></p>
                            <p><a href="#">Forgot password?</a></p>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Login