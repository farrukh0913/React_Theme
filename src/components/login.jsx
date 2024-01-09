import '../styles/login.css'
function Login({ login }) {
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
                        <button type="submit" onClick={login}>Login</button>
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