import React from "react";
import { Avatar, Button, Card, Col, Descriptions, Layout, Row, Tabs, List, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const properties = [
  {
    id: 1,
    title: "Cozy Apartment in Downtown",
    status: "Active",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    title: "Modern Flat in Suburbs",
    status: "Pending",
    image: "https://via.placeholder.com/100",
  },
];

const savedProperties = [
  {
    id: 1,
    title: "Luxury Villa by the Lake",
    location: "Udaipur, India",
    image: "https://via.placeholder.com/100",
  },
];

const Users = () => {
  return (
    <Layout style={{ padding: "2rem", background: "#fff" }}>
      <Card style={{ marginBottom: "2rem" }}>
        <Row align="middle" justify="space-between">
          <Col>
            <Row align="middle" gutter={16}>
              <Col>
                <Avatar size={100} src="https://i.pravatar.cc/100" />
              </Col>
              <Col>
                <Title level={3}>John Doe</Title>
                <Paragraph type="secondary">john@example.com</Paragraph>
              </Col>
            </Row>
          </Col>
          <Col>
            <Button type="primary" icon={<EditOutlined />}>
              Edit Profile
            </Button>
          </Col>
        </Row>
      </Card>

      <Content>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Overview" key="1">
            <Descriptions title="User Info" bordered column={1}>
              <Descriptions.Item label="Full Name">John Doe</Descriptions.Item>
              <Descriptions.Item label="Email">john@example.com</Descriptions.Item>
              <Descriptions.Item label="Gender">Male</Descriptions.Item>
              <Descriptions.Item label="Location">Mumbai, India</Descriptions.Item>
              <Descriptions.Item label="About">
                Full-stack developer passionate about building user-friendly applications.
              </Descriptions.Item>
            </Descriptions>
          </Tabs.TabPane>

          <Tabs.TabPane tab="My Properties" key="2">
            <List
              itemLayout="horizontal"
              dataSource={properties}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button type="link" key="edit">Edit</Button>,
                    <Button type="link" danger icon={<DeleteOutlined />} key="delete">
                      Delete
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar shape="square" size={64} src={item.image} />}
                    title={item.title}
                    description={`Status: ${item.status}`}
                  />
                </List.Item>
              )}
            />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Saved Properties" key="3">
            <List
              grid={{ gutter: 16, column: 2 }}
              dataSource={savedProperties}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    hoverable
                    cover={<img alt="saved" src={item.image} />}
                  >
                    <Card.Meta title={item.title} description={item.location} />
                  </Card>
                </List.Item>
              )}
            />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Account Settings" key="4">
            <Button type="primary" style={{ marginBottom: 12 }}>
              Change Password
            </Button>
            <br />
            <Button>Notification Preferences</Button>
            <br />
            <Button danger style={{ marginTop: 16 }}>
              Delete Account
            </Button>
          </Tabs.TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default Users;
