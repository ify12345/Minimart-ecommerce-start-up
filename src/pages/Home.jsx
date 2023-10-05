import React from 'react'
import Helmet from '../components/helmet/helmet'
import { Col, Container, Row } from 'reactstrap'
import heroImg from "../assets/images/hero-img.png"
import "../styles/home.css"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/services'
import ProductsList from '../UI/ProductsList'
const Home = () => {

    const year = new Date().getFullYear()
  return (
      <Helmet title={"Home"}>
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero_content">
                          <p className="hero_subtitle">
                            Trending product in {year}
                          </p>  
                          <h2> Make your Interior More Minimalistic & Modern</h2>
                          <motion.button whileTap={{scale: 1.3}} className="shop_btn">
                            <Link to="/shop">
                            SHOP NOW
                            </Link>
                          </motion.button>
                          
                        </div>
                    </Col>
                        <Col lg="6" md="6">
                            <div className="hero_img">
                               <img src={heroImg} alt="" /> 
                            </div>
                        </Col>



                </Row>
            </Container>
        </section>



        <Services/>

         
       <section className="trending_products">
         <Container>
          <Col lg="12" className='text-center'>
            <h2 className='section_title'>
              Trending Products
            </h2>
            <ProductsList/>
          </Col>
         </Container>
       </section>  

      </Helmet>
  )
}

export default Home
