import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { Link, useNavigate } from "react-router-dom";
import axios from "../components/Axios";
function Listing() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  async function ProductList() {
    try {
      let result = await axios.get("/api/list");
      //console.log("result", result);
      if (result.statusText === "OK") {
        setProduct(result.data);
      } else {
        setProduct([]);
        console.log("api url is not correct");
      }
    } catch (error) {
      console.log("api error", error);
    }
  }
  useEffect(() => {
    ProductList();
  }, []);
  async function Delete(id) {
    let result = await axios.delete("/api/delete/" + id);
    //console.log(result);

    ProductList();
  }

  return (
    <>
      <br />
      <br />
      <br />
      <section className="container py-5">
        <div className="p-5 bg-light rounded">
          <div className="row g-4">
            <div className="col-12">
              <div
                className="text-center mx-auto"
                style={{ maxWidth: "700px" }}
              >
                <h1 className="text-primary">Product List</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="col-sm-8 offset-sm-2">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, id) => (
              <tr key={id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>₹ {item.price}</td>
                <td>
                  <img
                    width="100"
                    src={"http://localhost:8000/" + item.filepath}
                    alt="prductimg"
                  />
                </td>
                <td>{item.description}</td>
                <td>
                  <span
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "5px",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => Delete(item.id)}
                  >
                    Delete
                  </span>
                </td>
                <td>
                  <Link
                    to={"/admin/update/" + item.id}
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      borderRadius: "5px",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Listing;
