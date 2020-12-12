import { Form, Input, Button, InputNumber } from "antd";
import { Row, Col, Layout, Select } from "antd";
import React from "react";
import Header from "./../components/Header";
import { Typography } from "antd";
const { Title } = Typography;
const { Footer, Content } = Layout;
import PostAPI from "./../apis/PostAPI";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const types = [
  { label: "Tìm trọ", value: "timtro " },
  { label: "Cho thuê", value: "chothue" },
];

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export default function PostPage({ history }) {
  const onFinish = async (values) => {
    console.log(values);
    const result = await PostAPI.create({
      name: values.name,
      price: Number.parseInt(values.price),
      image: values.image
        ? values.image
        : "https://cdn.chotot.com/Z0YjNTz2DE5T7-Yvls848ArfNIki0tkp3AMwEvYEANc/preset:view/plain/2fba49d1e0c01b9c142e841ab15a4168-2697050452033035915.jpg",
      content: values.introduction,
    });
    console.log(result.data);
    if (result.data === true) {
      history.push("/");
    }
  };
  return (
    <Layout>
      <Header />
      <Content
        style={{
          marginTop: "50px",
          backgroundColor: "white",
          width: "80%",
          margin: "auto",
          padding: "30px",
        }}
      >
        <Title level={2}>Create Post</Title>
        <Row>
          <Col span={12} offset={4}>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={"name"}
                label="Tiêu đề"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name={"price"}
                label="Giá bán"
                rules={[{ type: "number", min: 0, max: 100000000 }]}
              >
                <InputNumber />
              </Form.Item>

              <Form.Item
                name={"image"}
                label="Link ảnh"
                rules={[{ required: false }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={"introduction"} label="Giới thiệu">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Xác nhận
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
      <Footer>
        <Row>
          <Col span={12} offset={6}>
            CÔNG TY TNHH CHỢ TỐT - Địa chỉ: Phòng 1808, Tầng 18, Mê Linh Point
            Tower, 02 Ngô Đức Kế, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh
            <br />
            Giấy chứng nhận đăng ký doanh nghiệp số 0312120782 do Sở Kế Hoạch và
            Đầu Tư TPHCM cấp ngày 11/01/2013
            <br />
            Email: trogiup@chotot.vn - Đường dây nóng: (028)38664041
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}
