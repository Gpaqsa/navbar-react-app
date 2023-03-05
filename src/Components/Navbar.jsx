import React from 'react'
import "./navbar.css"
import { useState } from 'react'

const menuItems =
  [
    {
      title: "Home",
      icon: "fa-solid fa-house-user",
      url: "#",
      cName: "nav-links"
    },
    {
      title: "Services",
      url: "#",
      cName: "nav-links",
      icon: "fa-solid fa-briefcase"
    },
    {
      title: "Products",
      url: "#",
      cName: "nav-links",
      icon: "fa-brands fa-product-hunt"
    },
    {
      title: "Contact Us",
      url: "#",
      cName: "nav-links",
      icon: "fa-solid fa-circle-info",

    },
    {
      title: "Sing up",
      url: "#",
      cName: "nav-links singUpclassName"
    },
  ]
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (

    <nav className='navbar'>
      <div className='icon-container'>
        <h1 className='icon'><a href={menuItems[0].title}>React <i className="fab fa-react"></i></a></h1>
        <button
          className="toggle"
          onClick={()=>setNavbarOpen(!navbarOpen)}
        >
          <i className={navbarOpen ? "fas fa-times" : "fas fa-bars"} ></i>
        </button>
      </div>

      <ul className={navbarOpen ? "menu-items active" : "menu-items"}>

        {menuItems.map((item) => {
          return (
            <li key={item.title}><a href={item.url} className={item.cName}><i className={item.icon}></i> {item.title}</a></li>
          )
        })}
      </ul>


    </nav>

  )
}

export default Navbar
