import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import '../styles/checkout.css'
import { useSelector } from 'react-redux'


const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQty);
  const totalAmt = useSelector(state => state.cart.totalAmt);

  return (
    <section>
      <Container>
        <Row>
          <Col lg ='8'>
            <h6 className="mb-4 fw-bold mt-5">Billing Information</h6>
            <Form className='billing__form'>
              <FormGroup className='form__group'>
                <input type="text" placeholder='Enter your name' />
              </FormGroup>

              <FormGroup className='form__group'>
                <input type="email" placeholder='Enter your email' />
              </FormGroup>

              <FormGroup className='form__group'>
                <input type="number" placeholder='Phone number' />
              </FormGroup>

              <FormGroup className='form__group'>
                <input type="text" placeholder='Address' />
              </FormGroup>

              <FormGroup className='form__group'>
                <input type="text" placeholder='Postal Code' />
              </FormGroup>

              <FormGroup className='form__group'>
                <input type="text" placeholder='City' />
              </FormGroup>

              <FormGroup className='form__group'>
                <input type="text" placeholder='Country' />
              </FormGroup>
            </Form>
          </Col>

          <Col lg='4'>
            <div className="checkout__cart mt-5">
              <h6>Total Qty: <span>{totalQty}</span></h6>
              <h6>Subtotal: <span>$ {totalAmt}</span></h6>
              <h6>
                <span>
                  Shipping:  <br />
                  free shipping
                </span>
                <span>$0</span>
              </h6>
              
              <h4>Total Cost: <span>$ {totalAmt}</span></h4>

              <button className='buy_btn auth_btn  w-100'>Place an order</button>
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Checkout