import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {Link} from "react-router-dom"
import AdminHeader from "../adminpanel/AdminHeader";
import Navbar from "../components/Navbar";
import NavSearch from "../homepage/NavSearch";
import swal from 'sweetalert';

function Contact() {
  {
    /* emailjs template start */
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mibvzru",
        "template_5wt516x",
        form.current,
        "BFZtibHHpXrOMzS-o"
      )
      .then(
        (result) => {
          console.log(result.status);
          if (result.status===200){
            swal("Success", "Email has been Sent successfylly, you will get the respnse soon..", "success");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );

    
  };

  {
    /* emailjs template end */
  }
  return (
    <>
    <Navbar/>
    <NavSearch/>
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Contact</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Pages</Link>
          </li>
          <li className="breadcrumb-item active text-white">Contact</li>
        </ol>
      </div>
      {/* Single Page Header End */}

      {/* Contact Start */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div
                  className="text-center mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <h1 className="text-primary">Get in touch</h1>
                  <p className="mb-4">
                  </p>
                </div>
              </div>
               {/*<div className="col-lg-12">
                <div className="h-100 rounded">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.928808353126!2d85.0875323752037!3d24.968536677858886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2d16be9f0a0fb%3A0x214545b370841bfa!2sAmisha%20Vastralaya!5e0!3m2!1sen!2sin!4v1704632397892!5m2!1sen!2sin" 
                  className="rounded w-100"
                  style={{ height: "400px" }} 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>*/}
              <div className="col-lg-7">
                <form ref={form} className="">
                  <input
                    type="text"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Your Name"
                    name="from_name"
                    required 
                  />
                  <input
                    type="email"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Email"
                    name="from_email"
                    required 
                  />
                  <textarea
                    className="w-100 form-control border-0 mb-4"
                    rows="5"
                    cols="10"
                    placeholder="Your Message"
                    name="message"
                    required 
                  ></textarea>
                  <button
                    onClick={sendEmail}
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Corporate Office:</h4>
                    <p className="mb-2">Surat, Gujrat 394101</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Zonal Office:</h4>
                    <p className="mb-2">Tilak Nagar, NewDelhi 110018</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Mail Us</h4>
                    <p className="mb-2">skyblueappliances@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded bg-white">
                  <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Marketed & Trade.IMP By:</h4>
                    <p className="mb-2">Siddhi Vinayak</p>
                    <p className="mb-2"><span style={{color:"red"}}>Call Us Our Customer Care No:</span>(+91) 7858862017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}
export default Contact;
