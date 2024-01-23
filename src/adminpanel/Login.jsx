import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import {useNavigate} from 'react-router-dom'
import swal from "sweetalert";
import axios from '../components/Axios';

function Login(){

  const navigate=useNavigate();

    const[email,setEmail]= useState("");
    const[password,setPassword] = useState("");
    const[data,setData]=useState("");
    const[error,setError]=useState("");
    const[alert,setAlert]=useState("");
    const[alertd,setAlertd]=useState("");

    useEffect(()=>{
      if(localStorage.getItem('token')){
       navigate("/admin/add");
      };
     },[])
   
   
     async function Login(){
      let data = {email,password};
      //axios.get('/sanctum/csrf-cookie').then(async (response) => {
      let result =await axios.post("/api/login",data)
      //result = await result.json();
      setData(result.data);
      console.log("result",result);
      if(result.data.status===true)
      {
        localStorage.setItem("loggedInuser",result.data.data.name);
        localStorage.setItem("token",result.data.data.token);
        swal(
          "Success",
          "Logged in Successfully",
          "success"
        );
       setAlert(result.data.message);
       navigate("/admin/add");
       console.log("alert",alert);
      }
      if(result.data.status===false){
        setAlertd(result.data.messages);
      }
      if(result.data.status===400){
        setError(result.data.messages);
      }

    //});
    
    }


    return(
        <>
          
    {/* Login Start */}
    <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div
                  className="text-center mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <h1 className="text-primary">Login</h1>
                 
                </div>
              </div>
             
              <div className="col-lg-7">
              {alert?<div className="alert alert-success" role="alert">{alert}</div>:null}
              {alertd?<div className="alert alert-danger" role="alert">{alertd}</div>:null}
              {data.status===401?<div className="alert alert-danger" role="alert">{data.messages}</div>:null}
                <form  className="">
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
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                    onClick={Login}
                    type="button"
                    value="Login"
                  />
                  
                </form>
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <div>
                    <img  width="200" height="300" src="" alt="loginimg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login End */}
        </>
    )
}
export default Login;