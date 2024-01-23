import React from "react";
import {Link} from 'react-router-dom'
function Offer(){
    return(
        <>
{/* Offerss Start */}
        <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <Link to="#">
                            <div className="service-item bg-secondary rounded border border-secondary">
                                <img height="332px"  src="assets/img/steel2.jpeg" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-primary text-center p-4 rounded">
                                        <h5 className="text-white">Appam-Pan</h5>
                                        <h3 className="mb-0">20% OFF</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Link to="#">
                            <div className="service-item bg-dark rounded border border-dark">
                                <img  height="332px"  src="assets/img/airfryer.jpeg" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-light text-center p-4 rounded">
                                        <h5 className="text-primary">Airfryer</h5>
                                        <h3 className="mb-0">Free delivery</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Link to="#">
                            <div className="service-item bg-primary rounded border border-primary">
                                <img height="332px" src="assets/img/stove.jpeg" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-secondary text-center p-4 rounded">
                                        <h5 className="text-white">Gas-Stove</h5>
                                        <h3 className="mb-0">Discount Avail</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* Offers End */}
        </>
    )
}
export default Offer;