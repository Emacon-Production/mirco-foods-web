import React from 'react'
import Button from '../../components/button/Button'
import Navbar from '../../components/navbar/Navbar'
import './home.css'

const Home = () => {
  return (
    <div>
        <Navbar />
        
        <div className='hero'>
            <div className='hero_text_wrapper'>
                <h6>Grow Naturally, Live Naturally</h6>
                <h1>We Build Secure & Sustainable Food Systems in Africa</h1>
                <Button content="Find out more" />
            </div>
            <div className='hero_img_wrapper'>
                <div className='hero_img_set_one'>
                    <img 
                        src='https://res.cloudinary.com/emacon-production/image/upload/v1675376964/Mirco%20Foods/steven-weeks-DUPFowqI6oI-unsplash_difj5j.jpg' 
                        alt='Mirco Foods' 
                        className='hero_img_1'
                    />
                    <img 
                        src='https://res.cloudinary.com/emacon-production/image/upload/v1675376809/Mirco%20Foods/ibadah-mimpi-VoHrP4Ay97w-unsplash_wll9hu.jpg' 
                        alt='Mirco Foods' 
                        className='hero_img_2'
                    />
                </div>
                <div className='hero_img_set_two'>
                    <img 
                        src='https://res.cloudinary.com/emacon-production/image/upload/v1675376973/Mirco%20Foods/randy-fath-dDc0vuVH_LU-unsplash_vq9goz.jpg' 
                        alt='Mirco Foods' 
                        className='hero_img_1'
                    />
                    <img 
                        src='https://res.cloudinary.com/emacon-production/image/upload/v1675376960/Mirco%20Foods/mariliz-lopez--4hu4CU1T_k-unsplash_kypcwr.jpg' 
                        alt='Mirco Foods' 
                        className='hero_img_2'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home