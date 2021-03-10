import React, { useState } from "react";

export default function User(props) {
  const { key, name, headshot, email, cell, home } = props;
  const [isHidden, setHide] = useState(false);

  return (
    <li key={key}>
      <div class="header">
        <img src={headshot} alt={name}></img>
        <h2>{name}</h2>
      </div>

      <div class="details">
        {isHidden && (
          <div>
            <p>Email: {email}</p>
            <p>Cell: {cell}</p>
            <p>Home: {home}</p>
          </div>
        )}
      </div>

      <button
        onClick={() => {
          isHidden ? setHide(false) : setHide(true);
        }}
      >
        {isHidden ? <span>Hide Details</span> : <span>Show Details</span>}
      </button>
    </li>
  );
}
