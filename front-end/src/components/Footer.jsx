import React from "react";
import { Row, Col } from "antd";

export default function Footer() {
  return (
    <Row style={{ marginTop: "12px" }}>
      <Col span={12} offset={6}>
        CÔNG TY TNHH CHỢ TỐT - Địa chỉ: Phòng 1808, Tầng 18, Mê Linh Point
        Tower, 02 Ngô Đức Kế, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh
        <br />
        Giấy chứng nhận đăng ký doanh nghiệp số 0312120782 do Sở Kế Hoạch và Đầu
        Tư TPHCM cấp ngày 11/01/2013
        <br />
        Email: trogiup@chotot.vn - Đường dây nóng: (028)38664041
      </Col>
    </Row>
  );
}
