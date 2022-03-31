import React from "react";
import { map, isEmpty } from "lodash";

import "./ListUsers.scss";

export default function ListUsers(props) {
  const { users } = props;
  console.log(props);

  if (isEmpty(users)) {
    return <h2>No Results found</h2>;
  }

  return (
    <ul className="list-users">
      {map(users, (user) => (
        <h2 key={user.id}>
       {user?.name}{user?.lastname}
       </h2>
      ))}
    </ul>
  );
}