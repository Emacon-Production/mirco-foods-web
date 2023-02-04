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

        <Footer />
    </div>
  )
}

export default Services