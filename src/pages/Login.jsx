import { Link } from 'react-router-dom'
import  "./styles//login-sign-up.css"
const Login = () => {
  return (
    <div className="loginSignUp">
      <form>
        <h4>Log in</h4>
        <input type="email" placeholder="Your email" />
        <input type="password" placeholder="Password" />
        <button>Continue</button>
        <span>
          Don't have an account? 
          <Link to="/sign-up"> Sign up</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
