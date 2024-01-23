import React, { useState,useEffect } from "react";
import AdminHeader from "./AdminHeader";
import { useNavigate } from "react-router-dom";
import axios from '../components/Axios';
import swal from 'sweetalert';

function Signup(){
   const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('loggedInuser')){
     navigate("/admin/add");
    }
   },[])
    const [name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword]=useState("");
    const[cpassword,setCpassword]=useState("");
    const[error,setError]=useState("");
    const[alert,setAlert]=useState("");
    const[errorcss,setErrorcss]=useState("block");

      function Register(){
      let data =  {name, email, password,cpassword};
      console.log(data);
     axios.get('/sanctum/csrf-cookie').then(async (response) => {
     let result = await axios.post("/api/register",data);
     //result = await result.json();
     console.log("result:",result)
     if(result.data.status===400){
        setError(result.data.messages)
     }else
     {if(result.data.status===200)
     {
      localStorage.setItem("auth_token",result.data.token);
      localStorage.setItem("auth_name",result.data.username);
      swal("Success", result.data.messages,"success");
      navigate("/admin/login");
      setAlert(result.data.messages);
      setErrorcss("none");
     }}
    });
    }

    return(
        <>
        
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
                  <h1 className="text-primary">Signup</h1>
                 
                </div>
              </div>
             
              <div className="col-lg-7">
              {alert?<div className="alert alert-success" role="alert">{alert}</div>:null}
              
                <form className="">
                <input
                    type="text"
                    className="w-100 form-control border-0 py-3 mb-4"
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="User's Name"
                    name="name"
                    required
                  />
                  {error?<div id="error" style={{color:"red",display:{errorcss}}}>{error.name}</div>:null}
                  
                  <input
                    type="email"
                    className="w-100 form-control border-0 py-3 mb-4"
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="User's Email"
                    name="email"
                    required
                  />
                      <div id="error" style={{color:"red"}}>{error.email}</div>
                  <input
                    type="password"
                    className="w-100 form-control border-0 py-3 mb-4"
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <div id="error" style={{color:"red"}}>{error.password}</div>
                  <input
                    type="password"
                    className="w-100 form-control border-0 py-3 mb-4"
                    onChange={(e)=>setCpassword(e.target.value)}
                    placeholder="Re-enter the Password"
                    name="cpassword"
                    required
                  />
                  <span id="error" style={{color:"red"}}>{error.cpassword}</span>
                  <input
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                    onClick={Register}
                  type="button" value="Submit"
                  />
                </form>
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <div>
                    <img  width="200" height="300" src="" alt="#signupimg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
        </>
    )
}
export default Signup;