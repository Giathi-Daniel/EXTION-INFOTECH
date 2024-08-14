// src/pages/SignIn/SignIn.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { OAuth } from "../components/OAuth";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section className="forgot-password">
      <h1 className="header">Forgot Password</h1>
      <div className="password-form">
        <form>
          <input
            className="input-field"
            type="text"
            placeholder="Email Address"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="links-container">
            <p className="mb-6">
              Dont have an account?{" "}
              <Link to="/sign-up" className="link">
                Register
              </Link>
            </p>
            <p>
              <Link to="/sign-in" className="link">
                Sign in instead
              </Link>
            </p>
          </div>
          <button type="submit" className="submit-button">
            Send reset password
          </button>
          <div className="divider-container">
            <p className="divider-text">OR</p>
          </div>
          <OAuth />
        </form>
      </div>
    </section>
  );
}

export default ForgotPassword;
