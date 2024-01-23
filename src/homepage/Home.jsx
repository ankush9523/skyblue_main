import React from "react";
import Feature from "./Features";
import Products from "./Products";
import Offer from "./Offers";
import Banner from "./Banner";
import BestSeller from "./BestSellerProducts";
import Slider from "./Slider";
import Navbar from "../components/Navbar";
import NavSearch from "./NavSearch";


function Home(){
    return(
        <>
       <Navbar/>
       <NavSearch/>
       <Slider/>
       <Feature/>
       <Products/>
       <Offer/>
       <Banner/>
      {/* <BestSeller/>*/}
       {/*<Testimonial/>*/}
        </>
    )
}
export default Home;