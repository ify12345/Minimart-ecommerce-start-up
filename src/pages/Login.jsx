import React, { useState } from 'react'
import Helmet from "../components/helmet/helmet"
import { Container,Row,Col, Form,FormGroup } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/login.css"
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'
import { signInWithEmailAndPassword } from 'firebase/auth'


const Login = () => {

  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[loading,setLoading] = useState(false)
  const navigate = useNavigate()

const signIn = async (e)=>{
   e.preventDefault()
   setLoading(true)

  try{
     const userCredential = await signInWithEmailAndPassword(auth,email,password)
     const user = userCredential.user
     

     setLoading(false)
     toast.success("Successfully logged in")
     navigate("/checkout")
  }
  catch(error){
      setLoading(false)
      toast.error(error.message)
  }

}


  return (
      <Helmet title="login">
        <section>
          <Container>
            <Row>
            {
              loading?<Col lg="12" className='text-center'><h5 className='fw-bold'>Loading.....</h5></Col>:
              <Col lg="6" className='m-auto text-center'>
              <h3 className="fw-bold fs-4 mb-4">Login</h3>


              <Form className='auth_form'onSubmit={signIn}>

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
            }
            </Row>
          </Container>
        </section>
      </Helmet>
  )
}

export default Login
