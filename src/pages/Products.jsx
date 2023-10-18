import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap'

import '../styles/products.css'
import productsData from '../assets/data/productData'
import ProductList from '../components/ProductList'


const Products = () => {

  const [allProducts, setAllProducts] = useState(productsData);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'sofa') {
      const filteredProducts = productsData.filter(
        (item) => item.category === 'sofa'
      );

      setAllProducts(filteredProducts);
    }

    if (filterValue === 'mobile') {
      const filteredProducts = productsData.filter(
        (item) => item.category === 'mobile'
      );

      setAllProducts(filteredProducts);
    }

    if (filterValue === 'chair') {
      const filteredProducts = productsData.filter(
        (item) => item.category === 'chair'
      );

      setAllProducts(filteredProducts);
    }

    if (filterValue === 'watch') {
      const filteredProducts = productsData.filter(
        (item) => item.category === 'watch'
      );

      setAllProducts(filteredProducts);
    }

    if (filterValue === 'wireless') {
      const filteredProducts = productsData.filter(
        (item) => item.category === 'wireless'
      );

      setAllProducts(filteredProducts);
    }
  }

  const handleSearch = (e) => {
    const term = e.target.value;

    const searchedProducts = productsData.filter(
      item => item.productName.toLowerCase().includes(term.toLowerCase())
      )

      setAllProducts(searchedProducts);
  }

  return (
    <>
    <section className='pt-5'>
      <Container>
        <Row>
          <Col lg='3' md='6'>
            <div className="filter__widget">
              <select onChange={handleFilter} >
                <option >Filter By Category</option>
                <option value="sofa">sofa</option>
                <option value="mobile">mobile</option>
                <option value="chair">chair</option>
                <option value="watch">watch</option>
                <option value="wireless">wireless</option>
              </select>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="search__box">
              <input 
                type="text" 
                placeholder='Search here..' 
                onChange={handleSearch} />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          {
          allProducts.length === 0? (<h1 className='text-center pt-5 pb-5 mb-5'>No products are found!</h1>)
          : (<ProductList data = {allProducts} />)
           }
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Products