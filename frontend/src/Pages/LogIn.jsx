import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Form, Input, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../Animation.json";
import baseURL from "../../config";
import { useDispatch, useSelector } from "react-redux";
import {signInStart,signInSuccess,signInFailure} from "../redux/user/userSlice"

const LogIn = () => {
  
  const {loading,error} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    dispatch(signInStart());
    try {
     
      const response = await axios.post(`${baseURL}auth/LogIn`, values);
      dispatch(signInSuccess(response.data.user));
      toast.success(response.data.message || "Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      dispatch(signInFailure(error.response?.data?.message || "LogIn failed"));
      toast.error(error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="flex bg-black bg-opacity-0 justify-center items-center min-h-screen p-4 relative">
      {/* Lottie Animation */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Lottie animationData={animationData} loop={false} className="w-40 h-40" />
        </div>
      )}

      <div className="w-full max-w-md bg-amber-300 border-2 rounded-3xl shadow-lg p-8 bg-opacity-90 relative">
        <Typography.Title
          className="text-center"
          style={{ fontFamily: "poppins", fontSize: "2rem" }}
        >
          Log In
        </Typography.Title>

        <Form
          style={{ fontFamily: "poppins" }}
          name="basic"
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
              { min: 3, message: "Username must be at least 3 characters long!" },
            ]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be at least 6 characters long!" },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item className="text-center">
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "black",
                width: "100%",
                fontFamily: "Times New Roman",
                borderRadius: "9999px",
              }}
              loading={loading} // Add loading spinner
            >
              Submit
            </Button>
          </Form.Item>
        </Form>

        <p className="flex mt-0 items-center justify-center text-black font-semibold">
          Or
        </p>
        <p className="flex mt-0 items-center justify-center text-black font-semibold">
          Don't have an account? &nbsp;
          <Link to="/SignUp" className="hover:text-blue-500">
            <u>Sign Up</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;