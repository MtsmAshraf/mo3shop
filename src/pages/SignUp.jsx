import React from 'react'
import { Link } from 'react-router-dom'
import "./styles//login-sign-up.css"
const SignUp = () => {
  return (
    <div className="loginSignUp">
      <form>
        <h4>Sign Up</h4>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <input type="password" placeholder="Password" />
        <button>Continue</button>
        <span>
          already have an account? 
          <Link to="/login"> login</Link>
        </span>
        <div className="policyTerm">
          <input type="checkbox"id="policyTermsCheckBox" />
          <label htmlFor="policyTermsCheckBox">By clicking here I accept policy term</label>
        </div>
      </form>
    </div>
  )
}

export default SignUp
