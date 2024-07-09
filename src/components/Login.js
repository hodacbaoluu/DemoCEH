import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/App.scss'; // Import the SCSS file
import {getAccessToken} from "../getAcessToken"

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap', {
        username: values.taiKhoan,
        password: values.matKhau,
      }, 
    {
      // headers: {
      //   // Assuming your API expects authorization in the 'Authorization' header with a 'Bearer' prefix
      //   Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTExMTExMTFhIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiS2hhY2hIYW5nIiwibmJmIjoxNzIwNTA4MTU2LCJleHAiOjE3MjA1MTE3NTZ9.HX_fby6XJQq4RVUFLb02f9zX2DucsfhMJJLdsMKQQmA"}`, // Include retrieved token if available
      // },
      headers: {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTExMTExMTFhIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiS2hhY2hIYW5nIiwibmJmIjoxNzIwNTA4MTU2LCJleHAiOjE3MjA1MTE3NTZ9.HX_fby6XJQq4RVUFLb02f9zX2DucsfhMJJLdsMKQQmA",
      },
    }
    );

      if (response.data.success) {
        // console.log('Login successful:', response.data);
        // dispatch(login({ username: values.username }));

        
        navigate('/dashboard');
      } else {
        message.error('Invalid username or password', response.data);
      }
    } catch (error) {
      console.error('Login error:', error);
      message.error('There was an error logging in', error.data);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
