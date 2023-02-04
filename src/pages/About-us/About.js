import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './about.css'

const About = () => {
  return (
    <div className='about'>
        <Navbar background="solid" />

        <div className='about_hero'>
            <h4>About us</h4>
            <h1>Grown Naturally, Live Naturally</h1>
            <p>
                Mirco Foods Limited is an innovative Kenyan business dedicated to making positive social impact
                in the agricultural sector in Africa. Founded in 2022, Mirco is one of the leading buyers, processors,
                traders and exporters of oil seeds, pulses and nuts in the region. We support our farmers' network to acccess
                markets and finances in addition to technological and knowledge transfer. We pride ourselves as a trustworthy 
                partner with high level of reliability in delivering our promise.
            </p>
        </div>

        <div className='about_mission_vision'>
            <div className='our_mv'>
                <i class='bx bxs-bullseye'></i>
                <h2>
                    <span>Our</span> Mission
                </h2>
                <p>
                    To positively impact global health and farmers' livelihoods through provision of safe and nutritious food for all.
                </p>
            </div>

            <div className='our_mv'>
                <i class='bx bxs-bullseye'></i>
                <h2>
                    <span>Our</span> Vision
                </h2>
                <p>
                    To build secure and sustainable food systems in Africa.
                </p>
            </div>
        </div>

        <div className='our_values'>
            <div className='value'>
                <h1>M</h1>
                <p>
                    <span>Make a difference:</span>
                    We support sustainable food production and processing with minimal negative impacts on the environment. 
                    Leaving no one behindis our guiding principle
                </p>
            </div>

            <div className='value'>
                <h1>I</h1>
                <p>
                    <span>Integrity:</span>
                    At Mirco, our relationship with our stakeholders is pegged on 100% integrity. We believe in honesty and transarency
                    in our business transactions. Trust is our DNA.
                </p>
            </div>

            <div className='value'>
                <h1>R</h1>
                <p>
                    <span>Responsibilty:</span>
                    We are accountable and socially responsible for our actions, our outcomes and our future. We do what we say and own it. 
                    This is our company anthem. 
                </p>
            </div>

            <div className='value'>
                <h1>C</h1>
                <p>
                    <span>Care:</span>
                    The well-being and success of every individual connected to our business matters. Everyone is family. 
                </p>
            </div>

            <div className='value'>
                <h1>O</h1>
                <p>
                    <span>Ownership:</span>
                    We encourage our team members to think big and move fast. Our team exhibits strength of character and tenacity in 
                    achieving their goals. We own  
                </p>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default About