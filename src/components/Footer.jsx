import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <>
{/* Footer Start */}
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
            <div className="container py-5">
                <div className="pb-4 mb-4" style={{borderBottom: "1px solid rgba(226, 175, 24, 0.5)"}}>
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <Link to="#">
                                <h1 className="text-primary mb-0">SKYBLUE</h1>
                                <p className="text-secondary mb-0">Home Appliances</p>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mx-auto">
                                <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email"/>
                                <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{top: "0", right:"0"}}>Subscribe Now</button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex justify-content-end pt-3">
                                <Link className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" to=""><i className="fab fa-youtube"></i></Link>
                                <Link className="btn btn-outline-secondary btn-md-square rounded-circle" to=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Why People Like us!</h4>
                            <p className="mb-4">Welcome to SKYBLUE Home Appliances one stop shop where you can avail yourselves of a quality-proven range of Electrical 
                            Home Appliances to suit multiple domestic and commercial applications.
                            <br/>
                            We are very much keen to serve you with your bulk home appliance requirements! 
                            </p>
                            <Link to="/" className="btn border-secondary py-2 px-4 rounded-pill text-primary">Read More</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Shop Info</h4>
                            <Link className="btn-link" to="/">About Us</Link>
                            <Link className="btn-link" to="/contact">Contact Us</Link>
                            <Link className="btn-link" to="/">Privacy Policy</Link>
                            <Link className="btn-link" to="/">Terms & Condition</Link>
                            <Link className="btn-link" to="/">Return Policy</Link>
                            <Link className="btn-link" to="/">FAQs & Help</Link>
                        </div>
                    </div>
                   {/* <div className="col-lg-3 col-md-6">
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Account</h4>
                            <Link className="btn-link" to="">My Account</Link>
                            <Link className="btn-link" to="">Shop details</Link>
                            <Link className="btn-link" to="">Shopping Cart</Link>
                            <Link className="btn-link" to="">Wishlist</Link>
                            <Link className="btn-link" to="">Order History</Link>
                            <Link className="btn-link" to="">International Orders</Link>
                        </div>
                    </div>*/}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Contact</h4>
                            <p>Marketed & Trade.IMP by :  SiddhiVinayak</p>
                            <p>Email:  skyblueappliances@gmail.com</p>
                            <p>Phone:  (+91) 7858862017</p>
                            <p>Payment Accepted</p>
                            <img src="assets/img/payment.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer End */}
        </>
    )
}
export default Footer;