import React from 'react';
import './App.css';
import { Tabs, Tab, Accordion, Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  // Dữ liệu cho Tabs
  const tabData = [
    { id: 'home', title: 'Trang chủ', content: 'Chào mừng bạn quay trở lại! Tại đây bạn có thể theo dõi các hoạt động mới nhất.' },
    { id: 'profile', title: 'Hồ sơ', content: 'Thông tin tài khoản, cài đặt quyền riêng tư và tùy chỉnh giao diện người dùng.' },
    { id: 'services', title: 'Dịch vụ', content: 'Chúng tôi cung cấp: Đặt xe nhanh, Theo dõi lộ trình, và Hỗ trợ 24/7.' },
    { id: 'contact', title: 'Liên hệ', content: 'Hotline: 1-800-CAB-BOOK | Email: support@cabbooking.com' },
  ];

  // Dữ liệu cho Accordion (FAQs)
  const faqData = [
    { id: '0', q: 'Quy trình đặt xe như thế nào?', a: 'Nhập điểm đón/trả, chọn loại xe và xác nhận. Tài xế sẽ đến sau vài phút.' },
    { id: '1', q: 'Phương thức thanh toán được chấp nhận?', a: 'Chúng tôi chấp nhận Tiền mặt, Thẻ tín dụng và Ví điện tử (Momo, ZaloPay).' },
    { id: '2', q: 'Tôi có thể hủy chuyến không?', a: 'Bạn có thể hủy miễn phí trước khi tài xế bắt đầu di chuyển đến điểm đón.' },
  ];

  return (
    <Container className="py-5 bg-light min-vh-100">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">UI Navigation Elements</h1>
        <p className="text-muted">Demo sử dụng Tabs và Accordion trong React Bootstrap</p>
      </header>

      <Row className="justify-content-center">
        <Col lg={10}>
          
          {/* TABS SECTION - Phân loại nội dung ngang */}
          <Card className="shadow-sm border-0 mb-5">
            <Card.Body className="p-4">
              <h3 className="mb-4 d-flex align-items-center">
                <span className="badge bg-primary me-2">1</span> Thanh Điều Hướng (Tabs)
              </h3>
              <Tabs defaultActiveKey="home" id="main-nav-tabs" className="mb-3 custom-tabs" fill>
                {tabData.map((item) => (
                  <Tab 
                    eventKey={item.id} 
                    title={<span>{item.title}</span>} 
                    key={item.id}
                  >
                    <div className="p-4 bg-white border border-top-0 rounded-bottom">
                      <h4>{item.title}</h4>
                      <p className="lead text-secondary">{item.content}</p>
                    </div>
                  </Tab>
                ))}
              </Tabs>
            </Card.Body>
          </Card>

          {/* ACCORDION SECTION - Nội dung thu gọn dọc */}
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <h3 className="mb-4 d-flex align-items-center">
                <span className="badge bg-success me-2">2</span> Câu hỏi thường gặp (Accordion)
              </h3>
              <Accordion defaultActiveKey="0" flush className="border rounded">
                {faqData.map((faq) => (
                  <Accordion.Item eventKey={faq.id} key={faq.id}>
                    <Accordion.Header className="fw-bold">
                      ❓ {faq.q}
                    </Accordion.Header>
                    <Accordion.Body className="text-muted">
                      {faq.a}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Card.Body>
          </Card>

        </Col>
      </Row>
    </Container>
  );
}

export default App;