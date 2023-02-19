import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './impact.css'

const Impact = () => {
  return (
    <div>
      <Navbar background="solid" />

      <div className='impact_wrapper'>
        <img src='https://res.cloudinary.com/emacon-production/image/upload/v1675422670/Mirco%20Foods/Screenshot_from_2023-02-03_01-27-21_z5iyuq.png' alt='Mirco Foods Impact' />
      </div>

      <Footer/>
    </div>
  )
}

export default Impact