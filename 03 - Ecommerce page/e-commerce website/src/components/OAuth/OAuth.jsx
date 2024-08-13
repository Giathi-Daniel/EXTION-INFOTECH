import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { db } from "../../../firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore"; // Add these imports if missing

export const OAuth = () => {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await handleUser(result.user);
    } catch (error) {
      toast.error("Could not authorize with Google");
    }

    async function handleUser(user) {
      // check if user exists
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    }
  }

  return (
    <>
      <button type="button" onClick={onGoogleClick} className="btn__google">
        <FcGoogle className="gicon" />
        Continue with Google
      </button>
    </>
  );
};
