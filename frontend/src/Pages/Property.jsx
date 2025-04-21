import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Upload,
  Checkbox,
  Typography,
  Row,
  Col,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import baseURL from "../../config";

const { Title, Text } = Typography;
const { Option } = Select;

const Property = () => {
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    const formData = new FormData();
  
    // Append text fields
    for (let key in values) {
      if (key !== "images") {
        formData.append(key, values[key]);
      }
    }
  
    // Append live location if available
    if (location) {
      formData.append("lat", location.lat);
      formData.append("lng", location.lng);
    }
  
    // Append image files
    if (values.images && values.images.fileList) {
      values.images.fileList.forEach((file) => {
        formData.append("images", file.originFileObj);
      });
    }
  
    try {
      const res = await axios.post(`${baseURL}auth/property`, values);
  
      const data = await res.json();
      if (res.ok) {
        alert("Property posted successfully!");
        form.resetFields();
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error posting property:", error);
      alert("Network error");
    }
  };
  
  const [location, setLocation] = useState(null);

  const getLiveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(coords);
        },
        () => {
          message.error("Failed to fetch location.");
        }
      );
    } else {
      message.warning("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="max-w-full mx-auto max-h-1000 p-8 bg-white my-15 rounded-xl shadow-md">
      <Title level={2}>Post Your Property</Title>
      <Text type="secondary">
        List your property and reach thousands of potential tenants!
      </Text>

      <Form
        layout="vertical"
        form={form}
        onFinish={handleFinish}
        className="mt-6"
      >
        {/* Property Info */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Property Title" name="title" rules={[{ required: true }]}>
              <Input placeholder="e.g., Spacious 2BHK in Downtown" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Property Type" name="type" rules={[{ required: true }]}>
              <Select placeholder="Select Type">
                <Option value="apartment">Apartment</Option>
                <Option value="house">House</Option>
                <Option value="pg">PG</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Listing Type" name="listingType" rules={[{ required: true }]}>
              <Select placeholder="Rent / Sale">
                <Option value="rent">Rent</Option>
                <Option value="sale">Sale</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label="BHK Type" name="bhk">
              <Select>
                <Option value="1bhk">1 BHK</Option>
                <Option value="2bhk">2 BHK</Option>
                <Option value="3bhk">3 BHK</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Furnishing" name="furnishing">
              <Select>
                <Option value="furnished">Furnished</Option>
                <Option value="semi-furnished">Semi-furnished</Option>
                <Option value="unfurnished">Unfurnished</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Area (sq. ft.)" name="area">
              <Input type="number" placeholder="e.g. 1200" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Rent / Price" name="price">
              <Input type="number" prefix="₹" />
            </Form.Item>
          </Col>
        </Row>

        {/* Location */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Address Line" name="address">
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="City" name="city">
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="State" name="state">
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="PIN Code" name="pincode">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* Other Details */}
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label="Available From" name="availableFrom">
              <DatePicker className="w-full" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Preferred Tenants" name="tenants">
              <Select>
                <Option value="family">Family</Option>
                <Option value="bachelors">Bachelors</Option>
                <Option value="anyone">Anyone</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Bathrooms" name="bathrooms">
              <Select>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3+</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Balconies" name="balconies">
              <Select>
                <Option value="0">0</Option>
                <Option value="1">1</Option>
                <Option value="2">2+</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Amenities */}
        <Form.Item label="Amenities" name="amenities">
          <Checkbox.Group>
            <Row gutter={[16, 8]}>
              <Col span={6}><Checkbox value="parking">Parking</Checkbox></Col>
              <Col span={6}><Checkbox value="lift">Lift</Checkbox></Col>
              <Col span={6}><Checkbox value="gym">Gym</Checkbox></Col>
              <Col span={6}><Checkbox value="security">Security</Checkbox></Col>
              <Col span={6}><Checkbox value="internet">Internet</Checkbox></Col>
              <Col span={6}><Checkbox value="garden">Garden</Checkbox></Col>
              <Col span={6}><Checkbox value="backup">Power Backup</Checkbox></Col>
              <Col span={6}><Checkbox value="water">Water Supply</Checkbox></Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        {/* Image Upload */}
        <Form.Item label="Upload Property Images" name="images">
          <Upload
            listType="picture"
            beforeUpload={() => false} // Prevent auto upload
            multiple
            maxCount={10}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        {/* Contact Info */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Your Name" name="ownerName">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Phone Number" name="phone">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
          </Col>
        </Row>

      
        {/* Live Location */}
        <Form.Item label="Live Location (optional)">
          <Button onClick={getLiveLocation} type="dashed">
            Use My Current Location
          </Button>
          {location && (
            <>
              <Text type="success" className="block mt-2">
                Location: Lat {location.lat}, Lng {location.lng}
              </Text>
              <iframe
                title="Google Maps"
                width="100%"
                height="250"
                className="mt-3 rounded"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
              />
            </>
          )}
        </Form.Item>
        

        {/* Terms and Submit */}
        <Form.Item name="agree" valuePropName="checked" rules={[{ required: true }]}>
          <Checkbox>I agree to the Terms & Conditions</Checkbox>
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" >
            Post Property
          </Button>
        </Form.Item>


      </Form>
    </div>
  );
};

export default Property;
