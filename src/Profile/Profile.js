import { onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { auth } from '../firebase';
import Login from '../Account/Login';
import "./Profile.css";

function Profile(){

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const logout = async () => {
        await signOut(auth);
      };

    return(
        <div className="feed">
            <h1>Votre Profile</h1>
            
            {user?.email === undefined ? 
            <div className="connected">
                <h3>Vous n'êtes pas connecté</h3>
                <Login />
            </div>
            : 
            <div className="connected">
                <h3>Vous êtes connecté</h3>
                <div className="loged">{user?.email}</div>
                <button onClick={logout} className="buttonLogout"> Sign Out </button>
            </div>}
            
            
        </div>
    )
}

export default Profile;