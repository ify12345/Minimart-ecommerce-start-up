import React,{useRef,useEffect} from 'react'
import "../Header/header.css"
import { Container,Row } from 'reactstrap'
import { NavLink,useNavigate } from 'react-router-dom'

import { motion } from 'framer-motion'
import userIcon from "../../assets/images/user-icon.png"
import navIcon from "../../assets/images/eco-logo.png"
import { useSelector } from 'react-redux'

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

const headerRef = useRef(null);
const menuRef = useRef(null)
const totalQuantity = useSelector(state=> state.cart.totalQuantity)
const navigate = useNavigate()


const navigateToCart = ( )=>{
    navigate("/cart")
}
const sticky = ()=>{
    window.addEventListener("scroll",()=>{
        if(document.body.scrollTop > 80|| document.documentElement.scrollTop >80){
            headerRef.current.classList.add("sticky_header")
        }
        else{
            headerRef.current.classList.remove("sticky_header")
             
        }
    })
}

useEffect(()=>{
     sticky()

     return ()=> window.removeEventListener("scroll", sticky())
})


const menuToggle = ()=> menuRef.current.classList.toggle("active_menu") 

  return (
  <header className="header" ref={headerRef}>
    <Container>
        <Row>
            <div className="nav_wrapper " >

                <div className="logo">
                    <img src={navIcon} alt="logo" />
                    <div className="">
                        <h1>MinMart</h1>  
                    </div>
                </div>

                <div className="navigation" ref={menuRef} onClick={menuToggle}>
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

                    <span className="cart_icon" onClick={navigateToCart}>
                         <i className="ri-shopping-bag-line"></i>
                         <span className='badge'>{totalQuantity}</span>

                    </span>

                    <span>
                        <motion.img whileTap={{scale: 1.2}} src={userIcon} alt="" />
                    </span>
                    <div className="mobile_menu" onClick={menuToggle}>
                      <span><i className="ri-menu-line"></i></span>
                    </div>
                </div>
            
               
            </div>
        </Row>
    </Container>
  </header>
  )
}

export default Header
