import React from "react";
import {Link,Outlet,useNavigate} from 'react-router-dom';
import swal from "sweetalert";
import axios from '../components/Axios';
function AdminHeader(){
    
    const navigate = useNavigate();
    const user = localStorage.getItem("loggedInuser");
   // console.log("user",user);

     async function Logout()
    {   
        //let result = await axios.get("/api/logout");
        //if(result.data.status==="success"){
            localStorage.removeItem("token");
            localStorage.removeItem("loggedInuser");
            swal("Success","LoggedOut SuccesFully","success");
            navigate('/admin/login');
       // } 
         
    }
    return(
        <>
 {/* Navbar start */}
 <div className="container-fluid fixed-top">
            <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <Link to="#" className="text-white">Rajgir Road, Deepnagar, Bihar</Link></small>
                        <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><Link to="#" className="text-white">skyblueappliances@gmail.com</Link></small>
                    </div>
                    <div className="top-link pe-2">
                        <Link to="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</Link>
                        <Link to="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</Link>
                        <Link to="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></Link>
                    </div>
                </div>
            </div>
            <div className="container px-0">
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <Link to="#" className="navbar-brand"><img height="120" src="/assets/img/green_logo.png"/></Link>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                        {
                            localStorage.getItem("token") ? (
                                <>
                            <Link to="@ritesh_skyblue95_list" className="nav-item nav-link">Product_List</Link>
                            <Link to="add" className="nav-item nav-link active">AddProduct</Link>
                            </>
                            )
                             :
                             (
                                <>
                            <Link to="login" className="nav-item nav-link">Login</Link>
                           {/* <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <Link to="cart.html" className="dropdown-item">Cart</Link>
                                    <Link to="chackout.html" className="dropdown-item">Chackout</Link>
                                    <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                                    <Link to="404.html" className="dropdown-item">404 Page</Link>
                                </div>
                            </div>*/}
                            <Link to="signup" className="nav-item nav-link">Signup</Link>

                            </>
                             )
                           
                        }                         
                        </div>
                        <div className="d-flex m-3 me-0">
                            {
                                localStorage.getItem("loggedInuser") ? 
                                (
                                    <div className="nav-item dropdown">
                                <Link to="#" style={{textTransform:"uppercase"}} className="nav-link dropdown-toggle my-auto" data-bs-toggle="dropdown"><i className="fas fa-user fa-2x"></i> {user}</Link>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                <button onClick={Logout} className="dropdown-item">Logout</button>
                                </div>
                            </div>
                                ):
                                null
                            }
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div style={{marginTop:"50px"}}></div>
        {/* Navbar End */}
        <Outlet/>
        </>
    )
}
export default AdminHeader;