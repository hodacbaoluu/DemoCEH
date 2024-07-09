// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const AppMenu = () => (
  <Menu mode="horizontal">
    <Menu.Item key="">
      <Link to="/"></Link>
    </Menu.Item>
    <Menu.Item key="login">
      <Link to="/login">Login</Link>
    </Menu.Item>
    <Menu.Item key="dashboard">
      <Link to="/dashboard">Dashboard</Link>
    </Menu.Item>
  </Menu>
);

export default AppMenu;
