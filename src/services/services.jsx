import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import "../services/services.css";
import serviceData from "../assets/data/serviceData"

const services = () => {
  return (
     <section className="services">
      <Container>
            <Row>
           {
            serviceData.map((item,id)=>(
                      
                <Col key={id} lg="3" md="4">
                   <motion.div whileHover={{scale:1.1}} className="service_item" style={{background: `${item.bg}` }}>
                        <span>
                            <i className={item.icon}></i>
                        </span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div>
                    </motion.div>
                </Col>
            ))
           }
               
            
             </Row>
        </Container>
     </section>
  )
}

export default services
