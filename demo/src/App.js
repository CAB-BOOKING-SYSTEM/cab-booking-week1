import './App.css';
import { Tabs, Tab, Accordion, Container, Row, Col, Card } from 'react-bootstrap';
import { faqData, serviceData, tabData } from './constants';
import Navigation from './components/nav';
function App() {


  return (
    <Container className="py-5 bg-light min-vh-100">
      <Navigation/>
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">UI Navigation Elements</h1>
        <p className="text-muted">Demo sử dụng Tabs, Accordion và Grid trong React Bootstrap</p>
      </header>
      <Row className="justify-content-center">
        <Col lg={10}>
          
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

          <Card className="shadow-sm border-0 mb-5">
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

          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <h3 className="mb-4 d-flex align-items-center">
                <span className="badge bg-info me-2">3</span> Dịch Vụ 
              </h3>
              <Row className="g-4"> 
                {serviceData.map((service, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={3}> 
                    <Card className="h-100 text-center border-0 shadow">
                      <Card.Body>
                        <div className="display-4 mb-3">{service.icon}</div>
                        <h5 className="fw-bold">{service.title}</h5>
                        <p className="text-muted">{service.desc}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;