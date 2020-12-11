import React, { useEffect } from "react";
import { useAuth } from "./../hooks/use-auth";
import PeopleAPI from "../apis/postAPI";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { Layout, Row, Col, Divider } from "antd";
const { Content } = Layout;
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    PeopleAPI.get();
  }, []);
  const { setUser } = useAuth();

  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: "https://ant.design",
      title: `ant design part ${i}`,
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      description: "20 mét vuông 5PN",
      content: "15 triệu/tháng",
    });
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <>
      <Layout>
        <Header />

        <Content style={{ marginTop: "50px" }}>
          <Row>
            <Col span={12} offset={6}>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 5,
                }}
                dataSource={listData}
                renderItem={(item, index) => (
                  <Link to={`posts/${index.toString()}`}>
                    <List.Item
                      style={{ backgroundColor: "white" }}
                      key={item.title}
                      actions={[
                        <IconText
                          icon={StarOutlined}
                          text="Môi giới"
                          key="list-vertical-star-o"
                        />,
                        <IconText
                          icon={LikeOutlined}
                          text="5 phút trước"
                          key="list-vertical-like-o"
                        />,
                        <IconText
                          icon={MessageOutlined}
                          text="Quận Bình Thạnh"
                          key="list-vertical-message"
                        />,
                      ]}
                      extra={
                        <img
                          width={272}
                          alt="logo"
                          src="https://nhadat24h.com/uploads/bds/201902/22/877833_165037_vhc%201.png"
                        />
                      }
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={item.title}
                        description={item.description}
                      />
                      {item.content}
                    </List.Item>
                    <Divider />
                  </Link>
                )}
              />
            </Col>
          </Row>
        </Content>

        <Footer />
      </Layout>
    </>
  );
}
