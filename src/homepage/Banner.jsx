import React from "react";
import { Link } from "react-router-dom";
function Banner(){
    return(
        <>
{/* Banner Section Start*/}
        <div className="container-fluid banner bg-secondary my-5">
            <div className="container py-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="py-4">
                            <h1 className="display-3 text-white">CookWare Products</h1>
                            <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
                            <p className="mb-4 text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                            <Link to="/productlist" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">BUY</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <img src="assets/img/banner2.png" className="img-fluid w-100 rounded" alt=""/>
                            <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" style={{width: "176px", height:"178px", top: "199px", right: "-73px"}}>
                                <h1 style={{fontSize: "10px"}}>Product</h1>
                                <div className="d-flex flex-column">
                                    <span className="h2 mb-0">Stainless</span>
                                    <span className="h4 text-muted mb-0">Steel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner Section End */}
        </>
    )
}
export default Banner;