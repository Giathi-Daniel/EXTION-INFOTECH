// src/pages/SignIn/SignIn.jsx
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { OAuth } from "../components/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, { displayName: name });

      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Successfully registered");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <section className="sign-up-page">
      <div className="sign-up-container">
        <div className="sign-up-form">
          <h2 className="welcome-back">Create Account</h2>
          <form onSubmit={onSubmit}>
            <input
              className="input-field"
              type="text"
              placeholder="Full Name"
              id="name"
              value={name}
              onChange={onChange}
              required
            />
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
              <p className="login-link">
                Have an account?{" "}
                <Link to="/sign-in" className="link">
                  Sign In
                </Link>
              </p>
              <p>
                <Link to="/forgot-password" className="link">
                  Forgot Password
                </Link>
              </p>
            </div>
            <button type="submit" className="submit-button">
              Sign Up
            </button>
            <div className="divider-container">
              <p className="divider-text">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
        <div className="sign-up-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5fGVufDB8fDB8fHww"
            alt="sign up"
            className="image"
          />
        </div>
      </div>
    </section>
  );
}

export default SignUp;
