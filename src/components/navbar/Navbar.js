import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import menuData from '../../assets/menuData.json'
import Button from '../button/Button'

const Navbar = () => {
    const [toggle, setToogle] = useState(false);

    const handleOpenToggle = () => {
        setToogle(true);
    }

    const handleCloseToggle = () => {
        setToogle(false);
    }

    console.log(toggle);

  return (
    <div className='nav_wrapper'>
        <nav>
            <Link to="/" className='logo'>
                <img src='https://res.cloudinary.com/emacon-production/image/upload/v1675372027/logo-1_q1yxfd.png' alt='Mirco Foods' />
            </Link>

            <input type="checkbox" name="" id="toggle" />
            <label for="toggle">
                {
                    toggle ? <i class='bx bx-x' onClick={handleCloseToggle}></i> : <i class='bx bx-menu' onClick={handleOpenToggle}></i>
                }
                
            </label>

            <div className='menu'>
                <ul>
                    {
                        menuData.map((item, index) => (
                            <React.Fragment key={index}>
                                {
                                    item.name === "Contact" ? <Button content={item.name} /> :
                                    <li ><Link to={item.targetLink} className="menu_link">{item.name}</Link></li>
                                }
                                
                            </React.Fragment>
                        ))
                    }
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar