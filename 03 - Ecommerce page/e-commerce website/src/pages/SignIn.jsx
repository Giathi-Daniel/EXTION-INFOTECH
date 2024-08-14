import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { OAuth } from "../components/OAuth";
import Spinner from "../components/Spinner";
import "../css/OAuth.css";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const auth = getAuth();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      toast.success(`Welcome back, ${user.displayName || "User"}!`);
      navigate("/");
    } catch (error) {
      toast.error("User not found. Please create an account.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="sign-in-page">
      <div className="sign-in-container">
        {loading ? (
          <Spinner /> // Display spinner if loading is true
        ) : (
          <div className="sign-in-form">
            <h2 className="welcome-back">Welcome Back</h2>
            <form onSubmit={onSubmit}>
              <input
                className="input-field"
                type="text"
                placeholder="Email Address"
                id="email"
                value={email}
                onChange={onChange}
                required
              />
              <div className="password-container">
                <input
                  className="input-field"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={onChange}
                  required
                />
                {showPassword ? (
                  <AiFillEyeInvisible
                    className="password-icon"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className="password-icon"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </div>
              <div className="links-container">
                <p className="register-link">
                  Don’t have an account?{" "}
                  <Link to="/sign-up" className="link">
                    Register
                  </Link>
                </p>
                <p className="forgot-password-link">
                  <Link to="/forgot-password" className="link">
                    Forgot Password
                  </Link>
                </p>
              </div>
              <button type="submit" className="submit-button">
                Sign In
              </button>
              <div className="divider-container">
                <p className="divider-text">OR</p>
              </div>
              <OAuth />
            </form>
          </div>
        )}
        <div className="sign-in-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5fGVufDB8fDB8fHww"
            alt="login"
            className="image"
          />
        </div>
      </div>
    </section>
  );
}

export default SignIn;
