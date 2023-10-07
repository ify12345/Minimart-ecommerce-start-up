import React from 'react'
import "../styles/cart.css"
import Helmet from "../components/helmet/helmet"
import CommoSection from "../UI/CommoSection"
import {  Container,Col,Row } from 'reactstrap'

import {cartActions} from  "../redux/slices/cartSlice"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector((state)=> state.cart.cartItem)
 const totalAmount = useSelector((state)=> state.cart.totalAmount)


  return (

   <Helmet title='Cart'>

     <CommoSection title='Shopping Cart'/>

     <section>
      <Container>
        <Row>
          <Col lg="9">
            {
              cartItems.length === 0 ? (<h2 className='fs-4 text-center'> No item added to cart</h2>)
              :(
            <table className='table bordered'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
            
                </tr>
              </thead>

              <tbody>
                {
                  cartItems.map((item,id)=>(
                     <Tr item={item} key={id}/>
                  ))
                }
              </tbody>

            </table>)
            }
          </Col>



          <Col lg="3">
            <div>
              <h6 className='d-flex align-items-center justify-content-between'>SubTotal
              <span className='fs-4 fw-bold'>${totalAmount}</span>
              
              </h6>
            </div>
            <p className='fs-6 mt-2'>Taxes and shipping will be calculated in checkout</p>
            <div className='d-flex gap-5'>

              <button className='shop_btn w-100  '>
                <Link to="/checkout">
                  Checkout
                </Link>
              </button>
              <button className='shop_btn w-100 mt-3'>
                <Link to="/shop">
                  Continue Shopping
                </Link>
              </button>
            </div>
          </Col>

        </Row>

      </Container>

     </section>


   </Helmet>
  )
}



const Tr = ({item, id})=>{

  const dispatch = useDispatch()

const deleteProduct = ()=>{
  dispatch(cartActions.deleteItem(item.id))
}  

  return(
    <tr key={id}>
    <td>
      <img src={item.imgUrl} alt="" />
    </td>
    <td>{item.productName}</td>
    <td>{item.price}</td>
    <td>{item.quantity} pcs</td>
    <td
    onClick={deleteProduct}><i className="ri-delete-bin-line"></i></td>
  </tr>
  )
}
export default Cart
