import React, { useState } from 'react';
import {
  AppstoreOutlined,
  BankOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  StarOutlined,
  UserOutlined,
  HomeOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

import Dashboard from '../Components/Profile/Dashboard';
import Rooms from '../Components/Profile/Rooms';
import SavedProperty from '../Components/Profile/SavedProperty';
import Settings from '../Components/Profile/Settings';
import { Link } from 'react-router-dom';




const { Header, Sider, Content } = Layout;


const Profile = () => {
  
  const [collapsed, setCollapsed] = useState(false);
  const [currentPath, setCurrentPath] = useState('1');

 

    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const items=[
      {
        key: '1',
        icon: <AppstoreOutlined />,
        label: 'Overview',
      },
      {
        key: '2',
        icon: <BankOutlined />,
        label: 'My Property',
      },
      {
        key: '3',
        icon: <StarOutlined />,
        label: 'Saved Property',
      },
      {
        key: '4',
        icon: <SettingOutlined />,
        label: 'Settings',
      },
    ];

    const handleMenuClick = (item) => {
      console.log('Selected item:', item);
      setCurrentPath(item.key);
    }; 

    return (
      <Layout style={{ minHeight: '100vh', marginTop: '50.5px', }} >
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: "#18181B" }}>
          <div className="demo-logo-vertical" />
          <Menu
            onClick={handleMenuClick}
            theme="dark"
            mode="inline"
            style={{ backgroundColor: "#18181B"  }}
            defaultSelectedKeys={['1']}
            items={items}
           
          />

        </Sider>
        <Layout >
          <Header style={{ padding: 0, background: colorBgContainer, display: "flex", justifyContent: "space-between" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Button type="primary"   style={{
              fontSize: '16px',
              width: 90,
              height: 40,
              marginTop: 12,
              marginRight: 10,
              backgroundColor: "#18181B",
              padding:2,
            }}
            ><Link to="/Edit" ><EditOutlined/>Edit</Link></Button>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            { currentPath === '1' ? (
              <Dashboard />
            ) : currentPath === '2' ? (
              <Rooms />
            ) : currentPath === '3' ? (
              <SavedProperty />
            ) : currentPath === '4' ? (
              <Settings />
            ) : (null)}
           
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default Profile;