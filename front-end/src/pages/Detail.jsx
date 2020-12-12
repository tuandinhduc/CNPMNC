import React, { useState, useEffect } from "react";
import {
  Typography,
  Image,
  Comment,
  Avatar,
  Divider,
  Form,
  Button,
  Input,
} from "antd";
const { Title, Text } = Typography;
const { TextArea } = Input;

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useAuth } from "../hooks/use-auth";

export default function Detail() {
  const [post, setPost] = useState();
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
    console.log(commentDetail);
  }, [commentDetail]);

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
        <Title level={3}>
          Nhà SHR 1T1L mới xây ngay MT chợ Liên Khu 5-6 BTân
        </Title>
        <div style={{ margin: "auto", paddingBottom: "20px" }}>
          <Image
            style={{ margin: "auto", maxHeight: "400px" }}
            src="https://file4.batdongsan.com.vn/2018/12/15/20181215115509-6310_wm.jpg"
          />
        </div>
        <Text strong>Giá: 2.08 tỉ</Text>
        <div>
          Vị trí cực kỳ đẹp, thoáng, hẻm vào rộng 8m thông nằm ngay đường LK56
          thông ra Quốc Lộ 1A, đường số 6, Liên Khu 4-5, Cây Cám... Thích hợp
          cho khách nhu cầu mua nhà ở hoặc đầu tư, đầu tư cho thuê, kinh doanh
          buôn bán Diện tích sử dụng hơn 75m2. Thiết kế 1 trệt 1 lầu gồm 3 phòng
          ngủ, 2 vệ sinh, sân phơi, ban công, giếng trời. Khu dân đông đúc dân
          trí cao, an ninh tốt, kết cấu hạ tầng đường hoàn chỉnh. Khu xây dựng
          toàn nhà cao tầng. Giá bán 2.08 tỷ, thương lượng. Pháp lý hoàn chỉnh
          bao quy hoạch tranh chấp mua bán công chứng nhà nước. Với mức giá như
          vậy đảm bảo quý khách hàng không tìm được đâu căn thứ 2 mà giá mềm hơn
          pháp lý rõ ràng như vậy. Hãy liên hệ trực tiếp cho tôi để được xem nhà
          và thông tin giấy tờ. Trân trọng.
        </div>
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
