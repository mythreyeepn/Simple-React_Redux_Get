import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from './redux/actions';
import axios from 'axios';
import User from './User';
import './style.css';

export default function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.getUsers.users);

  const getUsers = async () => {
    const response = await axios.get('https://fakestoreapi.com/users');
    console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="container">
        {users && users.map((user) => <User data={user} />)}
      </div>
    </>
  );
}
