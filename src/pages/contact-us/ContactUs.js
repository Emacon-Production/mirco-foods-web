import React, { useState } from 'react'
import './contactus.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Button from '../../components/button/Button'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/loader/Loader'

const ContactUs = () => {
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            name: name,
            phone: phone,
            email: email,
            subject: subject,
            message: message
        }

        if(name, phone, email, subject, message) {
            emailjs.send(`service_yf93oza`, 'template_imf4bbo', templateParams, '-YhqFq2jIYW5K2oWy') 
                .then(res => {
                    setName('');
                    setPhone('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                    setLoading(false);
                    toast('Your message has been submited successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "light",
                        });
                }).catch(err => {
                    toast.error(`${err.text}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "light",
                        });

                    setLoading(false);
                })
        } else (
            toast.error(`Please fill all the fields in the form`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                })
        )

        
    }

  return (
    <div>
        <Navbar background="solid" />

        <div className="contact_wrapper">
            <div className='form_wrapper' >
                <h1>
                    We'd love to hear from you, <br />
                    Get in touch 
                </h1>

                <form>
                    <div className="inputGroup">
                        <input type="text" required="" autocomplete="off" value={name} onChange={e => setName(e.target.value)} />
                        <label for="name">Name</label>
                    </div>

                    <div className="inputGroup">
                        <input type="text" required="" autocomplete="off" value={phone} onChange={e => setPhone(e.target.value)} />
                        <label for="name">Phone Number</label>
                    </div>

                    <div className="inputGroup">
                        <input type="text" required="" autocomplete="off" value={email} onChange={e => setEmail(e.target.value)} />
                        <label for="name">Email Address</label>
                    </div>

                    <div className="inputGroup">
                        <input type="text" required="" autocomplete="off" value={subject} onChange={e => setSubject(e.target.value)} />
                        <label for="name">Subject</label>
                    </div>

                    <div className="inputGroup">
                        <textarea rows="6" type="text" required="" autocomplete="off" value={message} onChange={e => setMessage(e.target.value)} />
                        <label for="name">Message</label>
                    </div>

                    <Button content={loading ? <Loader /> : "Send Message"} type="1" handleClick={handleSubmit} />

                </form>
            </div>


            <div className='details_wrapper'>
                <div className='details_logo'>
                    <img src='https://res.cloudinary.com/emacon-production/image/upload/v1675372027/logo-1_q1yxfd.png' alt='Mirco Foods' />
                </div>

                <div className='details_data'>
                    <p>
                        <span>Contact:</span> +254 724 870870/ +254 739 870870
                    </p>
                    <p>
                        <span>Email:</span> info@mircofoods.co.ke
                    </p>
                    <p>
                        <span>Address:</span> P.O.BOX 21992-00100
                    </p>
                    <p>
                        <span>Nairobi, Kenya</span> 
                    </p>
                </div>
            </div>
        </div>

        <Footer />

        <ToastContainer />
    </div>
  )
}

export default ContactUs