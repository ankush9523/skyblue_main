import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props){
    const Cmp=props.cmp;
    const navigate = useNavigate();
    
    useEffect(()=>{
     if(!localStorage.getItem("loggedInuser")){
        navigate("/admin/login");
     }
    },[])

    return(
        <>
            <Cmp/>
        </>
    )
}
export default Protected;