import React from "react";

import "./InfoUser.scss";

export default function InfoUser(props) {
  const { user } = props;
    console.log(user);
  return (
    <div className="info-user">
      <h2 className="name">
        {user?.name} {user?.lastname}
      </h2>
      <p className="email">{user?.email}</p>
       <div className="description">
           <h1>Image</h1>
           </div>
    </div>
  );
}