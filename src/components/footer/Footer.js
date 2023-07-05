import React from 'react'
import './footer.css'
import menuData from '../../assets/menuData.json'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_logo_menu_wrapper'>
            <img src="https://res.cloudinary.com/emacon-production/image/upload/v1675372027/logo-1_q1yxfd.png" alt='Mirco Foods' />
            <div className='footer_menu'>
                {menuData.map((item, index) => <Link to={item.targetLink} key={index} className="menu_link">{item.name}</Link>)}
            </div>
        </div>
        <div className='footer_copyright_socials_wrapper'>
            <div className='copyright'>
                <p className="copyright_details">
                    {`Copyright © ${new Date().getFullYear()} Mirco Foods`}
                </p>
                <p className="copyright_details">
                    {`Developed by `}
                    <a color="inherit" href="https://emaconproduction.com" target="_blank" rel="noreferrer">
                        Emacon Production
                    </a>{' '}
                </p>
            </div>

            {/* <ul class="socials_wrapper">
                <li class="icon facebook">
                    <span class="tooltip">Facebook</span>
                    <span><i class='bx bxl-facebook' ></i></span>
                </li>
                <li class="icon twitter">
                    <span class="tooltip">Twitter</span>
                    <span><i class='bx bxl-twitter' ></i></span>
                </li>
                <li class="icon instagram">
                    <span class="tooltip">Instagram</span>
                    <span><i class='bx bxl-instagram-alt' ></i></span>
                </li>
            </ul> */}
        </div>
    </div>
  )
}

export default Footer