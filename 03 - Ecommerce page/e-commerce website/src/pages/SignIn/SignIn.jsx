// src/pages/SignIn/SignIn.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../../../firebase";
import { OAuth } from "../../components/OAuth/OAuth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(db, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign In</button>
      <OAuth />
    </form>
  );
}

export default SignIn;
