import React, { useState } from 'react'
import Helmet from "../components/helmet/helmet"
import { Container,Row,Col, Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../styles/login.css"




const Login = () => {

  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")


  return (
      <Helmet title="login">
        <section>
          <Container>
            <Row>
              <Col lg="6" className='m-auto text-center'>
                <h3 className="fw-bold fs-4 mb-4">Login</h3>


                <Form className='auth_form'>

                  <FormGroup className='form_group'>
                      <input type="email" placeholder='enter your mail'
                      value={email} onChange={e=>setEmail(e.target.value) } />
                  </FormGroup>

                  <FormGroup className='form_group'>
                      <input type="password" placeholder='enter your password'
                      value={password}
                        onChange={e=>setPassword(e.target.value) }
                      />
                  </FormGroup>

                  <button type="submit" className="buy_btn auth_btn">Login</button>
                  <p>Don't Have an account? <Link to="/signup">Create an account</Link></p>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
  )
}

export default Login
