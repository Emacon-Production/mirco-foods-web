import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const OurValues = () => {
  return (
    <div>
        <Navbar background="solid" />

        <div className='our_values_wrapper'>
            <h1>Our Values</h1>
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

export default OurValues