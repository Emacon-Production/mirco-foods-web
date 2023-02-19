import React, { useRef, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import menuData from '../../assets/menuData.json'
import Button from '../button/Button'
import DropdownMenu from '../dropdownMenu/DropdownMenu'

const Navbar = ({ background }) => {
    const [toggle, setToogle] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState();

    const handleOpenToggle = () => {
        setToogle(true);
    }

    const handleCloseToggle = () => {
        setToogle(false);
    }

    const handleSubMenuOnClick = (index) => {
        setDropdown(!dropdown);
        setActiveDropdown(index)
    }

    const handleCloseDropdown = () => {
        setDropdown(false);
    }

    const aboutRef = useRef(); 
    const whatWeDoRef = useRef(); 
    const dropDownMenuRef = useRef();

    window.addEventListener('click', e => {
        if(e.target !== aboutRef.current && e.target !== whatWeDoRef.current && e.target !== dropDownMenuRef.current){
            setDropdown(false);
        }
    })

  return (
    <div className='nav_wrapper'>
        <nav className={background === 'transparent' ? 'transparent' : 'solid'}>
            <Link to="/" className='logo'>
                <img src='https://res.cloudinary.com/emacon-production/image/upload/v1676701309/Mirco%20Foods/transparent_logo_wwdpuw.png' alt='Mirco Foods' />
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
                                    item.name === "Contact" ? <Button content={item.name} type="1" targetLink={item.targetLink} /> :
                                    (
                                        <li >
                                            {
                                                item.submenu ? (
                                                    <div className='menu_link'>
                                                        <p
                                                            ref={item.name === "About" ? aboutRef : whatWeDoRef }
                                                            aria-expanded={dropdown ? "true" : "false"}
                                                            onClick={() => handleSubMenuOnClick(index)}
                                                        >
                                                            {item.name}
                                                            <i class='bx bx-chevron-down'></i>
                                                        </p>
                                                        {
                                                            activeDropdown === index ? (
                                                                <DropdownMenu 
                                                                    // ref={dropDownMenuRef}
                                                                    submenus={item.submenu}
                                                                    dropdown={dropdown} 
                                                                    closeDropdown={handleCloseDropdown}
                                                                />
                                                            ) : null
                                                        }
                                                    </div>
                                                ) : <Link to={item.targetLink} className="menu_link">{item.name}</Link>
                                            }
                                            
                                        </li>
                                    )
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