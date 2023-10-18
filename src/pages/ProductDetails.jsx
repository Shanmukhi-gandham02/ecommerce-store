import React, {useState, useRef, useEffect} from 'react'

import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import products from '../assets/data/productData'
import ProductList from '../components/ProductList'
import '../styles/productDetails.css'
import { motion } from 'framer-motion'

import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/cartSlice'
import { toast } from 'react-toastify';


const ProductDetails = () => {

  const [tab, setTab] = useState('desc');
  const [rating, setRating] = useState(null);

  const dispatch = useDispatch();

  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const {id} = useParams();
  //console.log(id);
  const product = products.find(item => item.id === id );

  const {
    imgUrl, 
    productName, 
    price, 
    avgRating, 
    reviews, 
    description, 
    category,
    shortDesc} = product;

  const similarProducts = products.filter(item => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    
    if(reviewObj){
      toast.success('Review submitted!');
    }
  }

  const addToCart = () =>{
    dispatch(cartActions.addItem({
      id,
      imgUrl: imgUrl,
      productName,
      price,
      
    }));

    toast.success("Added to Cart")
  }

  useEffect(()=> {
    window.scrollTo(0,0);
  }, [product]);

  return (
    <>
    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='6'>
            <img src={imgUrl} alt="" />
          </Col>

          <Col lg='6'>
            <div className="product__details">
              <h2>{productName}</h2>
              <div className="product__rating d-flex align-items-center gap-5 mb-3">
                <div>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-half-s-fill"></i>
                  </span>
                </div>

                <p>(<span>{avgRating}</span> ratings)</p>
              </div>
              <div className="d-flex align-items-center gap-5">
                <span className='product__price'>$ {price}</span>
                <span>Category: {category.toUpperCase()} </span>
              </div>
              <p className='mt-3'>{shortDesc}</p>

              <motion.button whileTap={{scale: 1.3}} className='buy_btn' onClick={addToCart}>Add to Cart</motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="tab__wrapper d-flex align-items-center gap-5">
              <h6 
                className={`${tab === 'desc' ? 'active__tab' : ""}`}
                onClick={() => setTab('desc')}>
                  Description
              </h6>
              <h6 
                className={`${tab === 'desc' ? 'active__tab' : ""}`}
                onClick={() => setTab('rev')}>
                  Reviews ({reviews.length})
              </h6>
            </div>

            { tab === 'desc' ? (
              <div className='tab__content mt-5'>
                <p>{description}</p>
              </div>
            ) : (
              <div className='product__review mt-5'>
                <div className="review__wrapper">
                  <ul>
                    {reviews?.map((item,index) => (
                        <li key={index} className='mb-4'>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                  </ul>

                  <div className='review__form'>
                    <h4>Leave Your Experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input 
                            ref={reviewUser} 
                            type="text" 
                            placeholder='Enter name'
                            required
                          />
                        </div>

                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(1)}>1<i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(2)}>2<i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(3)}>3<i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(4)}>4<i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(5)}>5<i class="ri-star-s-fill"></i></motion.span>
                        </div>

                        <div className="form__group">
                          <textarea 
                            ref={reviewMsg} 
                            rows={4} 
                            type="text" 
                            placeholder='Message...' 
                            required
                          />
                        </div>

                        <motion.button whileTap={{scale: 1.2}} type='submit' className="buy_btn">Submit</motion.button>
                      </form>
                  </div>
                </div>
              </div>
            )

            }
          </Col>

          <Col lg='12' className='mt-5'>
            <h2 className="similar__title">Similar Products</h2>
          </Col>

          <ProductList data={similarProducts} />
        </Row>
      </Container>

    </section>
  </>
  )
}

export default ProductDetails