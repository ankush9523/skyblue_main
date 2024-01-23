import React from "react";
import { Link } from "react-router-dom";
function CopyRights(){
    return(
        <>
        {/* Copyright Start */}
        <div className="container-fluid copyright bg-dark py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span className="text-light"><Link to="/"><i className="fas fa-copyright text-light me-2"></i>2024 SKYBLUE HomeAppliances</Link>, All right reserved.</span>
                    </div>
                </div>
            </div>
        </div>
        {/* Copyright End */}

        {/* Back to Top */}
        <Link to="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></Link>   

        </>
    )
}
export default CopyRights;