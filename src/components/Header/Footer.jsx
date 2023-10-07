import React from 'react'
import "../Header/footer.css"
import { Container,Row,Col, ListGroup,ListGroupItem } from 'reactstrap'
import navIcon from "../../assets/images/eco-logo.png"
import { Link } from 'react-router-dom'



const Footer = () => {
  const news = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>

          <Col lg="4">
          <div className="logo">
            
                    <div >
                        <h1 className="text-white">MinMart</h1>  
                    </div>
                </div>
               
          </Col>

          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">
              Top Categories
              </h4>
              <ListGroup>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">
                    Mobile phones
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">
                    Modern Sofa
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">
                    Arm chair
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">
                    Watches
                  </Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg="2">
          <div className="footer_quick-links">
              <h4 className="quick_links-title">
                 Useful Links
              </h4>
              <ListGroup>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/shop">
                   Shop
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/cart">
                    Cart
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/login">
                    Login
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">
                    Privacy policy
                  </Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>


          <Col lg="3">
          <div className="footer_quick-links">
              <h4 className="quick_links-title">
                 Contacts
              </h4>
              <ListGroup className='footer_contacts'>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                     <i className="ri-map-pin-line"></i>
                  </span>
                  <p>Lagos state</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+2348106023450</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span >
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>shopmin@gmail.com</p>
                </ListGroupItem>

              </ListGroup>
            </div>
        
          </Col>
         <Col lg="12">
            <p className="footer_copyright">
              Copyright {news} developed by King Ifeanyi. All rights reserved
            </p>
         </Col>
        </Row>

      </Container>
    </footer>
  )
}

export default Footer
