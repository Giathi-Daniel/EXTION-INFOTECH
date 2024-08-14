import { useState } from "react";
import { Link } from "react-router-dom";
import { OAuth } from "../components/OAuth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      toast.error("Error sending password reset email. Please try again.");
    }
  };

  return (
    <section className="forgot-password">
      <h1 className="header">Forgot Password</h1>
      <div className="password-form">
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="email"
            placeholder="Email Address"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="links-container">
            <p className="mb-6">
              Don’t have an account?{" "}
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
