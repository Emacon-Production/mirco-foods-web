import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './product.css'
import productsData from '../../assets/productsData.json'
import queryString from 'query-string'
import CardComponent from '../../components/card/Card'

const Product = () => {
    const { product } = queryString.parse(window.location.search);
    const productData = productsData.filter(mproduct => mproduct.productName === product);
    const products = productData.reduce(item => item.products);

    console.log(products);

  return (
    <div className='product'>
        <Navbar background="solid" />

        <div className='products_wrapper' >
            <div className='section_title'>
                <h1>
                    <span className='section_title_800'>{product}</span>
                </h1>
            </div>

            <div className='home_products_wrapper'>
                {
                    products.products.map((majorProducts, index) => (
                        <div className='major_products_wrapper' key={index}>
                            <CardComponent majorProduct={majorProducts.name} thumbnail={majorProducts.thumbnail} />
                        </div>
                    ))
                }
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Product