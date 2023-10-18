import React from 'react'
import '../styles/cart.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../redux/cartSlice'




const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmt = useSelector(state => state.cart.totalAmt);

  //console.log(cartItems);

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='9'>
            {
              cartItems.length === 0 ? (
              <h2 className='fs-4 text-center empty__cart'>Oops! Your Cart is Empty</h2>
              ) : (

            <table className="table bordered mt-5">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {
                  cartItems.map((item, index) => (
                    <Tr item ={item} key={index} />
                  ))
                }
              </tbody>
            </table>
            )
          }
          </Col>
          
          <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center justify-content-between mt-5'>Subtotal
                <span className='fs-4 fw-bold'>$ {totalAmt}</span>
              </h6>
              
            </div>
            <p className='fs-6 mt-2'>taxes and shipping will be added at checkout</p>
            <div>
              <button className='buy_btn w-100 '><Link to='/checkout'> Checkout</Link></button>
              <button className='buy_btn w-100 mt-3'><Link to='/products'> Continue Shopping</Link></button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>



    </>
  )
}

const Tr = ({item}) => {

  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  }

  return (
    <tr>
        <td>
          <img src={item.imgUrl} alt="" />
        </td>
        <td>{item.productName}</td>
        <td>$ {item.price} </td>
        <td>{item.quantity}</td>
        <td>
          <motion.i 
            whileTap={{scale:1.2}} 
            onClick={deleteProduct}
            className="ri-delete-bin-line"
            >
          </motion.i>
        </td>
    </tr>
  )
}

export default Cart