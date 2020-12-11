import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import Header from "./../components/Header";
import { useAuth } from "./../hooks/use-auth";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const { Title } = Typography;

export default function Signup({ history }) {
  const { signin, signup } = useAuth();
  const onFinish = (values) => {
    console.log("Success:", values);
    signup();
    history.push("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Header />
      <Title style={{ textAlign: "center", marginTop: "20px" }} level={1}>
        Sign up
      </Title>
      <Form
        style={{ width: "80%" }}
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Password"
          name="re-password"
          rules={[
            {
              required: true,
              message: "Please re-input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
