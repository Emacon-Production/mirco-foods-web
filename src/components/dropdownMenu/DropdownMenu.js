import React from 'react'
import { Link } from 'react-router-dom'
import './dropdownmenu.css'

const DropdownMenu = ({ submenus, dropdown,handleCloseDropdown }) => {
  return (
    <div className={`dropdown ${dropdown ? "show":""}`}>
        {
            submenus.map((submenu, index) => (
                <Link 
                    to={submenu.target}
                    key={index} 
                    className="submenu_items"
                    onClick={() => handleCloseDropdown()}
                >
                    {submenu.menu}
                </Link>
            ))
        }
    </div>
  )
}

export default DropdownMenu

// Zone Editor