import React from 'react'
import '../styles/footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
                <div>
                    <h1 className='text-white'>ShopNest</h1>
                </div>
            </div>
            <p className="footer__text mt-4 mb-4">
            ShopNest is your one-stop e-commerce destination, 
            offering a seamless shopping experience with a wide range of products 
            and personalized recommendations to make your online shopping effortless 
            and enjoyable. Shop, save, and discover with ShopNest today!
            </p>
          </Col>

          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+9876543210</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-mail-line"></i></span>
                  <p>shopnest@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer__copyright">
              Copyright @{year} developed by <b>Shanmukhi Gandham.</b> All rights are reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer