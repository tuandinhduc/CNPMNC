import { Form, Input, Button, Checkbox, InputNumber } from "antd";
import { Upload, Menu, Row, Col, Layout, Select } from "antd";
import React from "react";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import Header from "./../components/Header";
import { Typography } from "antd";
const { Title } = Typography;
const { Footer, Content } = Layout;

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

const onFinish = (values) => {
  console.log(values);
};

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export default function PostPage() {
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
        <Title level={2}>Post New Room</Title>
        <Row>
          <Col span={12} offset={4}>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label="Tiêu đề"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "price"]}
                label="Giá bán"
                rules={[{ type: "number", min: 0, max: 100000000 }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["user", "type"]}
                label="Loại bài viết"
                rules={[{ required: true, message: "Missing area" }]}
              >
                <Select options={types} />
              </Form.Item>
              <Form.Item
                name="upload"
                label="Ảnh"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="Ảnh liên quan"
              >
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button icon={<UploadOutlined />}>Chọn để tải lên</Button>
                </Upload>
              </Form.Item>

              <Form.Item name={["user", "introduction"]} label="Giới thiệu">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Xác nhận
                </Button>
                <Button style={{ margin: "0 8px" }}>Xoá</Button>
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
