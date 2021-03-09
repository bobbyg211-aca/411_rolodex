import React, { useEffect, useState } from "react";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then((res) => res.json())
      .then((users) => setUsers(users.results));

    console.log(users);
  }, []);

  const [isHidden, setHide] = useState(false);

  return (
    <ul class="users">
      {users.map((user) => {
        return (
          <li key={user.login.uuid}>
            <div class="header">
              <img
                src={user.picture.medium}
                alt={user.name.first + "-" + user.name.last}
              ></img>
              <h2>
                {user.name.first} {user.name.last}
              </h2>
            </div>

            <button
              onClick={() => {
                isHidden ? setHide(false) : setHide(true);
              }}
            >
              Details
            </button>

            {isHidden ? (
              <div class="details">
                <p>Email: {user.email}</p>
                <p>Cell: {user.cell}</p>
                <p>Home: {user.phone}</p>
              </div>
            ) : (
              <div class="details"></div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
