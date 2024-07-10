// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import {  Menu } from 'antd';
import '../styles/Menu.scss'; 

const AppMenu = () => (
  <Menu className='flex-container'>
    <Menu.Item key="dashboard">
      <Link to="/dashboard"><img src="https://cehsoft.com/wp-content/themes/cehsoft/images/logo-1.png" className='logo' alt="" /></Link>
    </Menu.Item>
    <Menu.Item key="login">
      <Link className='text-right' to="/login">Login</Link>
    </Menu.Item>
  </Menu>
);

export default AppMenu;
