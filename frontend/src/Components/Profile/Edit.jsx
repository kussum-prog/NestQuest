import React from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const Edit = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form Values:', values);
    message.success('Profile updated successfully!');
  };

  const normFile = (e) => {
    if (Array.isArray(e)) return e;
    return e?.fileList;
  };

  const { currentUser } = useSelector(state => state.user)

  // Dummy avatar URL (replace with actual user data)
  //   const avatarUrl = "https://api.dicebear.com/7.x/initials/svg?seed=User";

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "auto",
        padding: '2rem',
        backgroundColor: '#f0f2f5',
        borderRadius: '8px',
        marginTop: '90px'
      }}
    >
      <h2 style={{ fontSize: 24, fontWeight: 600, textAlign: "center", marginBottom: 24, }}>
        User Profile
      </h2>

      <div style={{ textAlign: "center", marginBottom: 24, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src={currentUser.avatar}
          alt="profile"
          style={{
            borderRadius: '50%',
            height: 80,
            width: 80,
            objectFit: "cover",
            cursor: "pointer",
           
          }}
        />


      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          name: '',
          email: '',
          password: '',
          address: '',
        }}
      >
        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Enter Your name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { type: 'email', message: 'Enter a valid email' },
            { required: true, message: 'Please enter your email' },
          ]}
        >
          <Input placeholder="email@example.com" />
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

        <Form.Item
          name="address"
          label="address"
          rules={[
            { required: true, message: 'Your current Address' },
            { required: true, message: 'Enter  Your current address' },
          ]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          name="avatar"
          label="Profile Picture"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="avatar" listType="picture" maxCount={1}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Form.Item>
            <Button type="primary" htmlType="" block style={{ backgroundColor: 'red', display: "inline" }}>
              Delete Account
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="reset" block>
              Update
            </Button>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="" block style={{ backgroundColor: 'red', display: "inline", }}>
              Log Out
            </Button>
          </Form.Item>
        </div>


      </Form>
    </div>
  );
};

export default Edit;
