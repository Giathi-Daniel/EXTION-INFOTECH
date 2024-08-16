import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import Spinner from "../components/Spinner";
import "../css/Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser({
        name: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
      });
    }
  }, [auth]);

  if (!user) {
    return <Spinner />;
  }

  return (
    <div className="profile__container">
      <div className="profile__image">
        <img src={user.photoURL || "default-profile.png"} alt="Profile" />
      </div>
      <div className="profile__info">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
