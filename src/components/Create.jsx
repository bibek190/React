import React from "react";
import { Layout, Menu, Form, Input, Button, Radio } from "antd";
import { useDispatch } from "react-redux";

const { Header, Content } = Layout;

const Create = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const onFinish = (values) => {
    // console.log("Form Values:", values);
    dispatch();
  };

  return (
    <Layout>
      {/* Navbar */}
      <Header>
        <div
          style={{
            color: "white",
            fontSize: "20px",
            float: "left",
            marginRight: "50px",
          }}
        >
          MyApp
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", label: "Create" },
            { key: "2", label: "About" },
            { key: "3", label: "Contact" },
          ]}
        />
      </Header>

      {/* Content Section */}
      <Content
        style={{ padding: "50px", display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            width: 400,
            background: "#fff",
            padding: 24,
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>
            Contact Form
          </h2>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              name="age"
              label="age"
              rules={[{ required: true, message: "Please enter your age!" }]}
            >
              <Input placeholder="Enter your age" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Invalid email format!" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
            >
              <Input.TextArea rows={4} placeholder="Write your message..." />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                { required: true, message: "Please select your gender!" },
              ]}
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default Create;
