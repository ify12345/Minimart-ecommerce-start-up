import React from 'react'
import "../Header/header.css"
import { Container,Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import { motion } from 'framer-motion'
import userIcon from "../../assets/images/user-icon.png"
import navIcon from "../../assets/images/eco-logo.png"

const nav_links = [
    {
        path: "home",
        display: "Home"
    },
    {
        path: "shop",
        display: "Shop"
    },
    {
        path: "cart",
        display: "Cart"
    }
]

const Header = () => {
  return (
  <header className="header">
    <Container>
        <Row>
            <div className="nav_wrapper">

                <div className="logo">
                    <img src={navIcon} alt="logo" />
                    <div className="">
                        <h1>MinMart</h1>  
                    </div>
                </div>

                <div className="navigation">
                    <ul className="menu">
                       {
                        nav_links.map((items,id)=>{
                            return(
                                <li key={id} className="nav_item">
                                    <NavLink to={items.path} className={
                                (navClass) => navClass.isActive ? 
                                    "nav_active" 
                                    : " " }
                                    >
                                    {items.display}
                                    </NavLink>
                                </li>
                            )
                        })
                       }
                    </ul>
                </div>

                <div className="nav_icons">

                    <span className="fav_icon">
                         <i className="ri-heart-line"></i>
                         <span className='badge'>1</span>
                    </span>

                    <span className="cart_icon">
                         <i className="ri-shopping-bag-line"></i>
                         <span className='badge'>1</span>

                    </span>

                    <span>
                        <motion.img whileTap={{scale: 1.2}} src={userIcon} alt="" />
                    </span>
                </div>
            
                <div className="mobile_menu">
                      <span><i className="ri-menu-line"></i></span>
                </div>
            </div>
        </Row>
    </Container>
  </header>
  )
}

export default Header
