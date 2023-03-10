import React, { useState } from 'react'
import Button from '../../components/button/Button'
import CardComponent from '../../components/card/Card'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
import productsData from '../../assets/productsData.json'
import servicesData from '../../assets/servicesData.json'
import membershipData from '../../assets/membershipLogos.json'
import Footer from '../../components/footer/Footer'

const Home = () => {
    const [navBackground, setNavBackground] = useState('transparent');
    const [showCertificateBtn1, setShowCertificateBtn1] = useState(false);
    const [showCertificateBtn2, setShowCertificateBtn2] = useState(false);

    const changeNavigationBackground = () => {
        if(window.scrollY >= 80){
            setNavBackground('solid');
        } else {
            setNavBackground('transparent');
        }
    }

    window.addEventListener('scroll', changeNavigationBackground);

  return (
    <div>
        <Navbar background={navBackground} />
        
        <div className='hero'>
            <div className='hero_text_wrapper'>
                {/* <h6>Grow Naturally, Live Naturally</h6>
                <h1>We Build Secure & Sustainable Food Systems in Africa</h1> */}

                <h6>We Build Secure & Sustainable Food Systems in Africa</h6>
                <h1>Grown Naturally, Live Naturally</h1>

                <Button content="Find out more" type="1" targetLink="/about" />
            </div>
            <div className='hero_img_wrapper'>
                <div className='hero_img_set_one'>
                    <img 
                        src='https://res.cloudinary.com/emacon-production/image/upload/v1675376964/Mirco%20Foods/steven-weeks-DUPFowqI6oI-unsplash_difj5j.jpg' 
                        alt='Mirco Foods' 
                        className='hero_img_1'
                    />
                    <img 
                        src='https://res.cloudinary.com/emacon-production/image/upload/v1677475351/Mirco%20Foods/monika-grabkowska-1PmVG-ScdKk-unsplash_czvchl.jpg' 
                        alt='Mirco Foods' 
                        className='hero_img_2'
                    />
                </div>
                <div className='hero_img_set_two'>
                    <img 
                        src='https://res.cloudinary.com/emacon-production/image/upload/v1677470974/Mirco%20Foods/WhatsApp_Image_2023-02-25_at_12.23.48_ozwgek.jpg' 
                        alt='Mirco Foods' 
                        className='hero_img_1'
                    />
                    <img 
                        src='https://res.cloudinary.com/emacon-production/image/upload/v1676350817/Mirco%20Foods/etty-fidele-oJpkjWcScyg-unsplash_ghme4t.jpg' 
                        alt='Mirco Foods' 
                        className='hero_img_2'
                    />
                </div>
            </div>
        </div>

        <div className='home_products'>
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

        <div className='home_services'>
            <div className='section_title'>
                <h1>
                    <span className='section_title_200' style={{ color: 'white' }} >Our</span>
                    <span className='section_title_800' style={{ color: 'white' }} >Services</span>
                </h1>
            </div>

            <div className='home_services_content'>
                {
                    servicesData.map((service, index) => (
                        <div className='service_wrapper' key={index}>
                            <i class={service.icon} />
                            <h2>{service.serviceName}</h2>
                            <p>{service.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className='home_capacity_building'>
            <div className='capacity_building_img'>
                <img src='https://res.cloudinary.com/emacon-production/image/upload/v1676788740/Mirco%20Foods/annie-spratt-QYcSeY7vuZM-unsplash_vcu53k.jpg' />
            </div>
            <div className='capacity_building_text'>
                {/* <h6>Global Health & Farmer's Livelihood</h6> */}
                <h1>
                    <span>Capacity</span> Building
                </h1>
                <p>
                    Provision of advisory services including mentorship and coaching. <br/> <br/>
                    Support in acccess to finance and market linkages. <br /> <br />
                    Support in identification and adoption of practical tools, technology and systems to minimize potential risks to product quality.
                </p>
            </div>
        </div>

        <div className='home_membership'>
            <div className='membership_title'>
                {/* <h6>Agriculture</h6> */}
                <h1>
                    {/* <span>Worldwide</span> <br/> */}
                    Membership & Certifications
                </h1>
                {/* <Button type="3"  content="Contact us Today" icon="bx bx-envelope" targetLink="/contact" /> */}
            </div>

            <div className='membership_logos'>
                <div>
                    {
                        membershipData.map((logo, index) => <img src={logo} alt="Mirco Foods" key={index} /> )
                    }
                </div>
                
                <div className="certificates">
                    <div 
                        className='certificate organic_EU' 
                        onMouseEnter={() => setShowCertificateBtn1(true)}
                        onMouseLeave={() => setShowCertificateBtn1(false)}
                    >
                        {
                            showCertificateBtn1 && (
                                <a href="https://drive.google.com/file/d/1YHWV05soxchHjTJH4rHOO_6p9QFmzUXn/view?usp=sharing" download primary='true' target="_blank">
                                    View
                                    <div class="arrow-wrapper">
                                        <div class="arrow"></div>

                                    </div>
                                </a>
                            )
                        }

                                <a className='mobile_certificate_btn' href="https://drive.google.com/file/d/1YHWV05soxchHjTJH4rHOO_6p9QFmzUXn/view?usp=sharing" download primary='true' target="_blank">
                                    View
                                    <div class="arrow-wrapper">
                                        <div class="arrow"></div>

                                    </div>
                                </a>
                        
                    </div>

                    <div 
                        className='certificate USDA-NOP' 
                        onMouseEnter={() => setShowCertificateBtn2(true)}
                        onMouseLeave={() => setShowCertificateBtn2(false)}
                    >
                        {
                            showCertificateBtn2 && (
                                <a href="https://drive.google.com/file/d/1XYDNGPLbZKmhxKL7Spdl0M_ZVBZvE84i/view?usp=sharing" download primary='true' target="_blank">
                                    View
                                    <div class="arrow-wrapper">
                                        <div class="arrow"></div>

                                    </div>
                                </a>
                            )
                        }

                            <a className='mobile_certificate_btn' href="https://drive.google.com/file/d/1XYDNGPLbZKmhxKL7Spdl0M_ZVBZvE84i/view?usp=sharing" download primary='true' target="_blank">
                                View
                                <div class="arrow-wrapper">
                                    <div class="arrow"></div>

                                </div>
                            </a>
                        
                    </div>
                    
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Home