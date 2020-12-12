import React, { useEffect, useState } from "react";
import PostAPI from "../apis/PostAPI";
import { List, Avatar, Space } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { Layout, Row, Col, Divider } from "antd";
const { Content } = Layout;
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const [listData, setListData] = useState([
    {
      href: "https://ant.design",
      name: `Nguyễn Văn A`,
      avatar: `https://www.gravatar.com/avatar/${Math.round(
        Math.random() * 1000
      )}?d=identicon`,
      image:
        "https://cdn.chotot.com/_HkBStnSEmK2hBkmpG9NUpjUOGwA6giz6qNDpr0SFB4/preset:view/plain/3978841869.jpg",
      description: "30 mét vuông 5PN",
      price: 2000000,
      content: "15 triệu/tháng",
    },
    {
      href: "https://ant.design",
      name: `Nguyễn Văn B`,
      avatar: `https://www.gravatar.com/avatar/${Math.round(
        Math.random() * 1000
      )}?d=identicon`,
      price: 1400000,
      image:
        "https://cdn.chotot.com/1nN7n-AteXvkuO_CVqzxnc6AY6OFA8-vXP_XRGgneNc/preset:view/plain/4d3baf4c58eda2dfda4d43a399de3591-2694284938176832249.jpg",
      description: "25 mét vuông 2PN",
      content: "3 triệu/tháng",
    },
    {
      href: "https://ant.design",
      name: `Nguyễn Văn C`,
      avatar: `https://www.gravatar.com/avatar/${Math.round(
        Math.random() * 1000
      )}?d=identicon`,
      price: 2000000,
      image:
        "https://cdn.chotot.com/b8-vkE9hut9L20qcBPL1GF0E_TqmWlRbbcffK1ZmRmM/preset:view/plain/2d40e46d365bb857b19266af8d51bccd-2675877819335513666.jpg",
      description: "20 mét vuông 1PN",
      content: "2 triệu/tháng",
    },
    {
      href: "https://ant.design",
      name: `Nguyễn Thị D`,
      avatar: `https://www.gravatar.com/avatar/${Math.round(
        Math.random() * 1000
      )}?d=identicon`,
      image:
        "https://cdn.chotot.com/Z0YjNTz2DE5T7-Yvls848ArfNIki0tkp3AMwEvYEANc/preset:view/plain/2fba49d1e0c01b9c142e841ab15a4168-2697050452033035915.jpg",
      description: "",
      content: "Tìm trọ giá rẻ",
    },
    {
      href: "https://ant.design",
      name: `Nguyễn Thị E`,

      avatar: `https://www.gravatar.com/avatar/${Math.round(
        Math.random() * 1000
      )}?d=identicon`,
      image:
        "https://cdn.chotot.com/peooP8mzAaEraSxjd47lzpgyK7rbeOR1gkG2V4EL1lA/preset:view/plain/b7dc1faadd2f5d809a53aab896e2afbe-2693880537136181024.jpg",
      description: "",
      content: "Tìm trọ giá sinh viên",
    },
  ]);

  useEffect(() => {
    PostAPI.getAll().then((s) => {
      console.log(s.data);
      setListData((p) => s.data.reverse().concat(p));
    });
  }, []);

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
                  <Link to={`posts/${item.id ? item.id : index.toString()}`}>
                    <List.Item
                      style={{ backgroundColor: "white", padding: 40 }}
                      key={item.name}
                      actions={[
                        <IconText
                          icon={StarOutlined}
                          text={item.type === "find" ? "Tìm Phòng" : "Cho Thuê"}
                          key="list-vertical-star-o"
                        />,
                      ]}
                      extra={
                        <img
                          width={272}
                          height={180}
                          alt="logo"
                          src={item.image}
                        />
                      }
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={
                              item.avatar
                                ? item.avatar
                                : `https://www.gravatar.com/avatar/${Math.round(
                                    Math.random() * 1000
                                  )}?d=identicon`
                            }
                          />
                        }
                        title={item.name}
                        description={"Gía: " + item.price}
                      />
                      {item.content.substring(0, 100) + "..."}
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
