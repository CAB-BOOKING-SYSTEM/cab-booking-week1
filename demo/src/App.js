import React, { useState } from 'react';
import './App.css';
import { 
  Container, Row, Col, Card, Button, 
  Modal, Carousel, OverlayTrigger, Tooltip, Popover,
  Tabs, Tab, Accordion 
} from 'react-bootstrap';

function App() {
  // --- 1. SETUP STATE MODAL (Hộp thoại Đặt xe) ---
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // --- 2. SETUP TOOLTIP (Gợi ý mã giảm giá) ---
  const renderTooltip = (props) => (
    <Tooltip id="promo-tooltip" {...props}>
      🎁 Mã: <strong>CAB2024</strong> (Giảm 20k)
    </Tooltip>
  );

  // --- 3. SETUP POPOVER (Thông tin tài xế) ---
  const popover = (
    <Popover id="driver-popover">
      <Popover.Header as="h3" className="bg-success text-white">Tài xế đang đến!</Popover.Header>
      <Popover.Body>
        <p className="mb-1"><strong>Tên:</strong> Nguyễn Văn A</p>
        <p className="mb-0"><strong>Xe:</strong> Toyota Vios (51H-123.45)</p>
      </Popover.Body>
    </Popover>
  );

  // --- DỮ LIỆU GIẢ LẬP (Cho phần Tabs cũ) ---
  const tabData = [
    { id: 'history', title: 'Lịch sử', content: 'Bạn chưa có chuyến đi nào gần đây.' },
    { id: 'wallet', title: 'Ví điện tử', content: 'Số dư hiện tại: 0 VND.' },
  ];
  const faqData = [
    { id: '0', q: 'Làm sao để hủy chuyến?', a: 'Bấm nút Hủy trên màn hình chờ tài xế.' },
    { id: '1', q: 'Có xuất hóa đơn đỏ không?', a: 'Có, hóa đơn điện tử sẽ gửi về email.' },
  ];

  return (
    <Container className="py-5">
      <header className="text-center mb-5">
        <h1 className="text-primary fw-bold">🚕 CAB BOOKING SYSTEM</h1>
        <p className="text-muted">UI & Tương tác </p>
      </header>

      {/* --- PHẦN 1: CAROUSEL (Show Dynamic Content) --- */}
      <Card className="mb-5 shadow-sm border-0">
        <Card.Header className="bg-warning text-dark fw-bold">1. Các Loại Dịch Vụ (Carousel)</Card.Header>
        <Card.Body className="p-0">
          <Carousel>
            {/* Slide 1 */}
            <Carousel.Item interval={3000}>
              <div className="d-flex align-items-center justify-content-center bg-dark text-white" style={{height: '250px'}}>
                <div className="text-center">
                  <h2 className="display-4">🚗 Cab 4 Chỗ</h2>
                  <p>Di chuyển tiện lợi, che mưa che nắng.</p>
                </div>
              </div>
            </Carousel.Item>
            {/* Slide 2 */}
            <Carousel.Item interval={3000}>
               <div className="d-flex align-items-center justify-content-center bg-success text-white" style={{height: '250px'}}>
                <div className="text-center">
                  <h2 className="display-4">🛵 Cab Bike</h2>
                  <p>Nhanh chóng, len lỏi mọi ngõ ngách.</p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Card.Body>
      </Card>

      {/* --- PHẦN 2: TƯƠNG TÁC NGƯỜI DÙNG (Reveal Content) --- */}
      <Card className="mb-5 shadow-sm border-0">
        <Card.Header className="bg-primary text-white fw-bold">2. Chức Năng Đặt Xe (Interactive)</Card.Header>
        <Card.Body className="text-center p-5">
          <Row className="justify-content-center g-4">
            
            {/* A. TOOLTIP - Mã giảm giá */}
            <Col md={4}>
              <div className="border rounded p-4 h-100">
                <h5>Ưu đãi</h5>
                <p className="text-muted small">Rê chuột để xem mã</p>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                  <Button variant="outline-danger">🎫 Xem Voucher</Button>
                </OverlayTrigger>
              </div>
            </Col>

            {/* B. MODAL - Form Đặt xe */}
            <Col md={4}>
              <div className="border rounded p-4 h-100 bg-light">
                <h5 className="fw-bold text-primary">Đặt Xe Ngay</h5>
                <p className="text-muted small">Mở form nhập địa chỉ</p>
                <Button variant="primary" size="lg" onClick={handleShow} className="w-100 shadow">
                  🚖 GỌI XE (MODAL)
                </Button>
              </div>
            </Col>

            {/* C. POPOVER - Thông tin tài xế */}
            <Col md={4}>
              <div className="border rounded p-4 h-100">
                <h5>Trạng thái</h5>
                <p className="text-muted small">Click để xem tài xế</p>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                  <Button variant="outline-success">👨‍✈️ Ai đón tôi?</Button>
                </OverlayTrigger>
              </div>
            </Col>

          </Row>
        </Card.Body>
      </Card>

      {/* --- MODAL CONTENT (Nội dung Form Đặt xe) --- */}
      <Modal show={showModal} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>📍 Xác nhận lộ trình</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label fw-bold">Điểm đón:</label>
              <input type="text" className="form-control" value="Vị trí hiện tại (ĐH FPT)" readOnly />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Điểm đến:</label>
              <input type="text" className="form-control" placeholder="Nhập địa chỉ..." autoFocus />
            </div>
          </form>
          <div className="alert alert-info small mt-2">
            ℹ️ Tài xế sẽ đến sau khoảng 5 phút.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Hủy</Button>
          <Button variant="primary" onClick={handleClose}>✅ Tìm tài xế</Button>
        </Modal.Footer>
      </Modal>

      <hr className="my-5"/>
      <Row>
        <Col md={6} className="mb-4">
          <h5 className="text-secondary mb-3">Thông tin cá nhân</h5>
          <Tabs defaultActiveKey="history" className="mb-3">
            {tabData.map(t => <Tab key={t.id} eventKey={t.id} title={t.title}><div className="p-3 bg-light border rounded">{t.content}</div></Tab>)}
          </Tabs>
        </Col>
        <Col md={6}>
          <h5 className="text-secondary mb-3">Hỗ trợ khách hàng</h5>
          <Accordion defaultActiveKey="0">
            {faqData.map(f => <Accordion.Item key={f.id} eventKey={f.id}><Accordion.Header>{f.q}</Accordion.Header><Accordion.Body>{f.a}</Accordion.Body></Accordion.Item>)}
          </Accordion>
        </Col>
      </Row>

    </Container>
  );
}

export default App;