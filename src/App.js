import React, { useState } from "react";
import SignInSingUp from "./page/SignInSingUp";


export default function App() {
  const [user, setUser] = useState({name: "Tejaswini"});



  return (
   <div>
     {user ? (
       <div>
         <SignInSingUp/>
       </div>
     ):(
       <h1> Heyy </h1>
     )}
   </div>
  );
}


