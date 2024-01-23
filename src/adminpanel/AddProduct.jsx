import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import {useNavigate } from "react-router-dom";
import axios from '../components/Axios';
function AddProduct(){

   const navigate = useNavigate();
   const[name,setName]=useState("");
   const[price,setPrice]=useState("");
   const[description,setDescription]=useState("");
   const[filepath,setFilepath]=useState("");
   const[pdata,setPdata]=useState([]);
    
   async function addProducts(){
    console.log(name,price,description,filepath);
    const formData = new FormData();
        formData.append("name",name);
        formData.append("description",description);
        formData.append("price",price);
        formData.append("filepath",filepath);
       let result = await axios.post("/api/addProducts",formData);
       //result = await result.json();
       setPdata(result.data); 
       console.log("result",result);
       if(result.status===200)
       {
        navigate("/admin/list")
       }

   }

    return(
        <>
      
        <br/><br/>
    
    {/* AddProduct Start */}
    <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div
                  className="text-center mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <h1 className="text-primary">Add Products</h1>
                 
                </div>
              </div>
             
              <div className="col-lg-7">

              { pdata.status===200? (<div className="alert alert-success">{pdata.messages}</div>):null}
              { pdata.status===400? (<div className="alert alert-danger">{pdata.messages.name}**{pdata.messages.price}**{pdata.messages.description}**{pdata.messages.filepath} </div>):null}
              
              
                  <input
                    type="text"
                    onChange={(e)=>setName(e.target.value)}
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Product Name"
                    name="name"
                    required
                  />
                  <input
                    type="text"
                    onChange={(e)=>setPrice(e.target.value)}
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Product Price"
                    name="price"
                    required
                  />

                  <textarea
                   onChange={(e)=>setDescription(e.target.value)}
                    className="w-100 form-control border-0 mb-4"
                    rows="5"
                    cols="10"
                    placeholder="Description"
                    name="description"
                    required
                  ></textarea>
                    
                    <input
                    type="file"
                    onChange={(e)=>setFilepath(e.target.files[0])}
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="filepath"
                    name="filepath"
                    required
                  />
                  <button onClick={addProducts}
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                    type="submit"
                  >
                    Submit
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* AddProduct End */}
      
        </>
    )
}
export default AddProduct;