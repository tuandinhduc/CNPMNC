import React, { useState, useEffect } from "react";
import {
  Typography,
  Image,
  Comment,
  Avatar,
  Divider,
  Form,
  Button,
  Carousel,
  Input,
} from "antd";
import { useParams } from "react-router-dom";

const { Title, Text } = Typography;
const { TextArea } = Input;

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useAuth } from "../hooks/use-auth";
import PostAPI from "../apis/PostAPI";

export default function Detail() {
  let { postId } = useParams();
  const [post, setPost] = useState({});
  const [listComment, setListComment] = useState([]);
  const [commentDetail, setCommentDetail] = useState("");
  const { user } = useAuth();

  const submitComment = (value) => {
    console.log(user);
    setListComment((p) =>
      p.concat({ username: user.username ? "dask" : "", detail: value.comment })
    );
  };

  useEffect(() => {
    PostAPI.get(postId).then((res) => {
      setPost(res.data);
    });
  }, []);

  const Editor = () => (
    <Form onFinish={submitComment}>
      <Form.Item name="comment">
        <Input rows={4} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </Form>
  );

  const CommentSection = ({ listComments }) => {
    return (
      <div>
        {listComments.map((e, i) => {
          return (
            <Comment
              key={i}
              author={<a>{e.username}</a>}
              avatar={
                <Avatar
                  src="https://www.gravatar.com/avatar/23100?d=identicon"
                  alt="Han Solo"
                />
              }
              content={<p>{e.detail}</p>}
            />
          );
        })}
        <Editor
          onChange={(e) => setCommentDetail(e.target.value)}
          onSubmit={submitComment}
          value={commentDetail}
        />
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Header />
      <div
        style={{
          padding: "30px",
          backgroundColor: "white",
          border: "1px solid gray",
          maxWidth: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
          marginBottom: "50px",
        }}
      >
        <Title level={3}>{post.name}</Title>
        <div style={{ margin: "auto", paddingBottom: "20px" }}>
          <div>
            <Image
              style={{ margin: "auto", maxHeight: "400px" }}
              src={post.image}
            />
          </div>
        </div>

        <Text strong>Giá: {post.price} đ</Text>
        <div>{post.content}</div>
        <Divider />
        <Text level={2} strong>
          Comments
        </Text>
        <CommentSection listComments={listComment} />
      </div>
      <Footer />
    </div>
  );
}

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
