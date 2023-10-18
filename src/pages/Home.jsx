import React, {useState, useEffect} from 'react'

import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import {motion} from 'framer-motion'
import productData from '../assets/data/productData'
import counterImg from '../assets/images/counter-timer-img.png'

import ProductList from '../components/ProductList'
import Clock from '../components/Clock'

import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'



const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [newArrivalsProducts, setNewArrivalsProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = productData.filter(
      (item) => item.category === "chair"
    );

    const filteredNewArrivalsProducts = productData.filter(
      (item) => item.category === "mobile" || item.category === "wireless"
    );

    const filteredBestSalesProducts = productData.filter(
      (item) => item.category === "sofa"
    );

    const filteredPopularProducts = productData.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setNewArrivalsProducts(filteredNewArrivalsProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setPopularProducts(filteredPopularProducts);
    
  },[]);

  return (<>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6' >
            <div className="hero__content">
              <p className="hero__subtitle">
                Trending Products Now
              </p>
              <h2>Make your Interior More Minimalistic & Modern</h2>
              <p>Upgrade your living space with our minimalist and modern collection. 
                Discover sleek designs, clean lines, and premium materials for a contemporary interior transformation.
              </p>
              <button className="buy_btn"><span><Link to='/products' >SHOP NOW</Link></span></button>
            </div>
          </Col>

          <Col lg='6' md='6' >
            <div className="hero__img">
              <img src={heroImg} alt="heroImg" />
            </div>
          </Col>
        </Row>
      </Container>

    </section>

    
    <section className="trending__products mt-2">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title">
              Trending Products
            </h2>
          </Col>
          <ProductList data={trendingProducts}/>
        </Row>
      </Container>
    </section>

    <section className="best__sales mt-4">
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section__title">
                Best Sales
              </h2>
            </Col>
            <ProductList data={bestSalesProducts}/>
          </Row>
        </Container>
    </section>

    <section className="timer__count mt-5">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>
            <div className="clock__top-content">
              <h4 className="text-white fs-6 mb-2 mt-4">Limited Offer</h4>
              <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
            </div>

            <Clock />

            <motion.button whileHover={{scale:1.2}} className="store__btn">
              <Link to='/products'>Visit Store</Link>
            </motion.button>
          </Col>
          
          <Col lg='6' md='12' className='text-end counter__img'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new__arrivals mt-4">
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section__title">
                New Arrivals
              </h2>
            </Col>
            <ProductList data={newArrivalsProducts}/>
          </Row>
        </Container>
    </section>

    <section className="popular__category mt-4">
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section__title">
                Popular In Category
              </h2>
            </Col>
            <ProductList data={popularProducts}/>
          </Row>
        </Container>
    </section>

    
    </>
  )
}

export default Home