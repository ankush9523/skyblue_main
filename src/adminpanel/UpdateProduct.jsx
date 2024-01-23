import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import {  useParams, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
function Updateproducts() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [filepath, setFilepath] = useState("");

  useEffect(() => {
    Productdata();
  }, []);

  async function Productdata() {
    let result = await fetch("http://localhost:8000/api/getProduct/" + id);
    result = await result.json();
    setData(result);
    setName(result.data.name);
    setPrice(result.data.price);
    setDescription(result.data.description);
    setFilepath(result.data.filepath);
  }
  async function updateProduct(id) {
    //alert(id);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("filepath", filepath);

    let result2 = await fetch(
      "http://localhost:8000/api/update/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    );
    result2 = await result2.json();
    setData2(result2)
    if (result2.status===200){
      swal("Success","Product has been updated successfully","success");
      navigate("/admin/list");
    }
    //alert("pruduct has been successfully updated");
    //navigate("/admin/list");
  }
  return (
    <>
 
      {/* UpdateProduct Start */}
    <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div
                  className="text-center mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <h1 className="text-primary">Update Product</h1>
                 
                </div>
              </div>
             
              <div className="col-lg-7">

              { data2.status===200? (<div className="alert alert-success">{data2.messages}</div>):null}
              { data2.status===400? (<div className="alert alert-danger">{data2.messages.name}**{data2.messages.price}**{data2.messages.description}**{data2.messages.filepath} </div>):null}
              
              
              
                <input
                    type="text"
                    onChange={(e)=>setName(e.target.value)}
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Product Name"
                    defaultValue={data?.data?.name}
                    required
                  />
    
                <input
                    type="text"
                    onChange={(e)=>setPrice(e.target.value)}
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Product Price"
                    defaultValue={data?.data?.price}
                    required
                  />

                 <textarea
                   onChange={(e)=>setDescription(e.target.value)}
                    className="w-100 form-control border-0 mb-4"
                    rows="5"
                    cols="10"
                    placeholder="Description"
                    defaultValue={data?.data?.description}
                    required
                  ></textarea>
                 <input
                    type="file"
                    onChange={(e)=>setFilepath(e.target.files[0])}
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="filepath"
                    defaultValue={data?.data?.filepath}
                    required
                  />

                  <button onClick={() => updateProduct(data?.data?.id)}
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                    type="submit"
                  >
                    Submit
                  </button>
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <div>
                  <img
                  width={100}
                  src={"http://localhost:8000/" + data?.data?.filepath}
                  alt="#"
                />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UpdateProduct End */}

      
    </>
  );
}
export default Updateproducts;
