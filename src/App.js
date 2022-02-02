import React, { useState, useEffect } from "react";
import SignInSingUp from "./page/SignInSingUp";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./utils/contexts";
import { isUserLogedApi } from "./api/auth";


export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(isUserLogedApi());
  }, []);

  return (
   <AuthContext.Provider value={user}>
     {user ? <h1> You are Logged In </h1> : <SignInSingUp />}
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
   </AuthContext.Provider>
  );
}
