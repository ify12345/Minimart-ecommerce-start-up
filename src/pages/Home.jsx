import React, { useState, useEffect } from "react";
import Helmet from "../components/helmet/helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/services";
import ProductsList from "../UI/ProductsList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wireless, setWireless] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSellingProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setBestSellingProducts(filteredBestSellingProducts);
    setTrendingProducts(filteredTrendingProducts);
    setMobileProducts(filteredMobileProducts);
    setWireless(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2> Make your Interior More Minimalistic & Modern</h2>
                <motion.button whileTap={{ scale: 1.3 }} className="shop_btn">
                  <Link to="/shop">SHOP NOW</Link>
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

      <Services />

      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSellingProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count ">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchairs</h3>
              </div>

              <Clock />
              <button className="shop_btn store_btn"><Link to="/shop">Visit Store</Link></button>
            </Col>

            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>





    <section className="new_arrivals">
       <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">New arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wireless} />
          </Row>
        </Container>
    </section>
     

   <section className="popular_category">
       <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">Popular</h2>
            </Col>
            <ProductsList data={popularProducts} />
           
          </Row>
        </Container>
   </section>


    </Helmet>
  );
};

export default Home;
