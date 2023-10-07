import React,{useState} from 'react'
import Helmet from "../components/helmet/helmet"
import CommoSection from '../UI/CommoSection'
import { Col, Container, Row } from 'reactstrap'
import "../styles/shop.css"
import products from "../assets/data/products"
import ProductsList from "../UI/ProductsList"



const Shop = () => {


  const [productData,setProductData] = useState(products)

  const handleFilter =  (e )=> {
    const filterValue = e.target.value 

    if(filterValue === "sofa"){
      const filteredProducts = products.filter((item)=> item.category === "sofa")

      setProductData(filteredProducts)
    }

    if(filterValue === "mobile"){
      const filteredProducts = products.filter((item)=> item.category === "mobile")

      setProductData(filteredProducts)
    }

    if(filterValue === "chair"){
      const filteredProducts = products.filter(item=> item.category === "chair")

      setProductData(filteredProducts)
    }
    if(filterValue === "watch"){
      const filteredProducts = products.filter(item=> item.category === "watch")

      setProductData(filteredProducts)
    }


    if(filterValue === "wireless"){
      const filteredProducts = products.filter(item=> item.category === "wireless")

      setProductData(filteredProducts)
    }





  }
  const handleSearch = (e)=>{
    const searchTerm = e.target.value
       const searchedProducts = products.filter((item)=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
       setProductData(searchedProducts)
  }

    
  return (
   <Helmet title="shop">
     <CommoSection title="products"/>




     <section>'
      <Container>
        <Row>

          <Col lg="3" md="3">
            <div className="filter_widget">
             <select onChange={handleFilter}>
              <option>Filter by Category</option>
              <option value="sofa">Sofa</option>
              <option value="mobile">Mobile</option>
              <option value="chair">Chair</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wireless</option>
             </select>
            </div>
          </Col>

          <Col lg="3" md="3">
            <div className="filter_widget">
            <select>
              <option>Sort by</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
             </select>
            </div>
          </Col>


          <Col lg="6" md="6">
            <div className="search_box">
           <input onChange={handleSearch} type="text" placeholder='Search.......' />
           <span>
            <i className="ri-search-line"></i>
           </span>
            </div>
          </Col>







        </Row>
      </Container>
     </section>


     <section>
      <Container>
        <Row>
          {
            productData.length === 0 ? <h1>
              No products found
            </h1>: <ProductsList data={productData}/>

          }
        </Row>
      </Container>
     </section>
   </Helmet>
  )
}

export default Shop
