import React from 'react'
import './products.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import productsData from '../../assets/productsData.json'
import CardComponent from '../../components/card/Card'
import Button from '../../components/button/Button'

const Products = () => {
  return (
    <div className='products'>
        <Navbar background="solid" />

        <div className='products_wrapper'>
            <div className='section_title'>
                <h1>
                    <span className='section_title_200'>Our</span>
                    <span className='section_title_800'>Products</span>
                </h1>
            </div>

            <div className='home_products_wrapper'>
                {
                    productsData.map((majorProducts, index) => (
                        <div className='major_products_wrapper' key={index}>
                            <CardComponent majorProduct={majorProducts.productName} thumbnail={majorProducts.thumbnail} />
                            <div style={{ marginTop: "1rem" }}>
                                <Button content="Learn More" type="2" targetLink={`/product?product=${majorProducts.target}`} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Products