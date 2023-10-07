import React,{useState, useRef, useEffect} from 'react'
import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/helmet/helmet'
import CommoSection from '../UI/CommoSection'
import "../styles/productdetails.css"
import ProductsList from "../UI/ProductsList"
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'

const ProductDetails = () => {

  const [tab,setTab] = useState("desc")
  const reviewUser= useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch('')
  const [rating,setRating] = useState(null)
  const {id} = useParams()
  const product = products.find((item)=> item.id === id) 
  const {imgUrl,productName,price,avgRating,reviews,description,shortDescription,category } = product
  const relatedProducts = products.filter(item=>item.category === category)

const submitHandler = (e)=>{
  e.preventDefault()

  const reviewUserName = reviewUser.current.value
  const reviewUserMsg = reviewMsg.current.value
  const reviewObj = {
     author:reviewUserName,
     text: reviewMsg,
     rating, 
     }
        toast.success("review submiited")
  }

const addToCart =()=>{
  dispatch(cartActions.addItem({
    id,
    image: imgUrl,
    productName,
    price
  }))
  toast.success("Added to cart successfullly")
}


useEffect(()=>{
  window.scrollTo(0,0);
   
},[product])

  return (


    <Helmet title={productName} >

      <CommoSection title={productName}/>

      <section className='pt-0'>

        <Container>

          <Row>

            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>

            <Col lg="6">
                <div className="product_details">
                  <h2>{productName}</h2>
                  <div className='product_rating d-flex align-items-center gap-5 mb-3'>
                     <div>
                      <span>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-half-s-line"></i>
                      </span>
                     </div>
                     <p>{avgRating} ratings</p>
                  </div>
                     <div className='d-flex align-items-center gap-5'>

                     <span>${price}</span>
                     <span className=''>Category: {category.toUpperCase()}</span>
                     </div>
                    <p className='mt-3'>{shortDescription}</p>

                    <button className="shop_btn" onClick={addToCart}> Add to Cart</button>
                </div>
            </Col>

          </Row>

        </Container>

      </section>
    

  <section>
    <Container>
      <Row>
        <Col lg="12">
          <div className="tab_wrapper d-flex align-items-center gap-5">
            <h6 className={`${tab === "desc" ? "active_tab": " "}`}
            onClick={()=>setTab("desc")}>Description</h6>
            <h6
            onClick={()=>setTab("rev")} className={`${tab === "rev" ? "active_tab": " "}`}>Reviews ({reviews.length})</h6>
          </div>
       
         {
          tab ==="desc"  ?  <div className="tab_content mt-5">
          <p>
            {description}
          </p>
        </div>
        :
           (
        <div className='product_review mt-5 '>
          <div className="review_wrapper">
            <ul>
              {
                reviews?.map((item,id)=>
                  (
                    <li key={id} className='mb-4'>
                      <h6>John Doe</h6>
                      <span>{item.rating} (rating)</span>
                      <p>{item.text}</p>
                    </li>
                  
                  )
                )
              }
            </ul>
            <div className="review_form">
              <h4>Leave your experience</h4>
              <form onSubmit={submitHandler} action="">
                <div className="form_group">
                   <input type="text" placeholder='enter your name' ref={reviewUser}/>
                </div>

                <div className="form_group d-flex align-items-center gap-5">
                  <span onClick={()=>setRating(1)}>
                    1 <i className="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=>setRating(2)}>
                    2 <i className="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=>setRating(3)}>
                    3 <i className="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=>setRating(4)}>
                    4 <i className="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=>setRating(5)}>
                    5 <i className="ri-star-s-fill"></i>
                  </span>
                </div>



                <div className="form_group">
                   <textarea rows={4} type="text" placeholder='message'
                   ref={reviewMsg} />
                </div>

                <button type='submit' className="shop_btn">
                  Submit
                </button>
              </form>

            </div>



          </div>
        </div>
           )
         }

          
        </Col>
        <Col lg='12' className='mt-5'>
          <h2 className="related_title">
            You might also like 
          </h2>
          <ProductsList  data= {relatedProducts}/>
        </Col>
      </Row>
    </Container>
  </section>


    </Helmet>


  )
}

export default ProductDetails
