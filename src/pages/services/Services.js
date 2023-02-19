import React from 'react'
import './services.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import servicesData from '../../assets/servicesData.json'

const Services = () => {
  return (
    <div>
        <Navbar background="solid" />

        <div className='services'>
            <div className='section_title'>
                <h1>
                    <span className='section_title_200' style={{ color: 'white' }} >Seed</span>
                    <span className='section_title_800' style={{ color: 'white' }} >Cleaning</span>
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

        <Footer />
    </div>
  )
}

export default Services