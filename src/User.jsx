import React from 'react';
import './style.css';
const User = (props) => {
  const { email, id, phone, username } = props.data;
  const { firstname, lastname } = props.data.name;
  return (
    <>
      <div className="card">
        <p>Email : {email}</p>
        <p>
          Name : {firstname} {lastname}
        </p>
        <p>Phone: {phone}</p>
        <p>Username : {username}</p>
      </div>
    </>
  );
};

export default User;
