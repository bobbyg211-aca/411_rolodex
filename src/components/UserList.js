import React, { useEffect, useState } from "react";
import User from "./User";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then((res) => res.json())
      .then((users) => setUsers(users.results));

    console.log(users);
  }, []);

  return (
    <ul class="users">
      {users.map((user, index) => {
        return (
          <User
            key={user.login.uuid}
            index={index}
            name={user.name.first + " " + user.name.last}
            headshot={user.picture.medium}
            email={user.email}
            cell={user.cell}
            home={user.phone}
          />
        );
      })}
    </ul>
  );
};
