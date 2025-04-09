import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../Animation.json"; 
import baseURL from "../../config";



const LogIn = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true); 

    console.log("Success:", values);
    try {
      const response = await axios.post(
        `${baseURL}auth/LogIn`,
        values
      );
      toast.success(response.data.message || "Login successful!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex bg-black bg-opacity-0 justify-center items-center min-h-screen p-4 relative">
      {/* Lottie Animation Outside the Form */}
      {loading && (
        <div className="absolute top-10">
          <Lottie animationData={animationData} loop={true} className="w-40 h-40" />
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
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            style={{ fontFamily: "Times New Roman" }}
            rules={[{ required: true, message: "Please input your password!" }]}
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
              disabled={loading}
            >
              {loading ? "Logging in..." : "Submit"}
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
