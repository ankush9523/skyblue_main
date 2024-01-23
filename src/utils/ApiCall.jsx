
import axios from '../components/Axios';
import { useEffect,useState } from 'react';

export function useProductList(){


    const[product,setProduct] = useState([]);
    async function productdata(){
        let result= await axios.get("/api/list");
        //result = await result.json();
        console.log(result);
        console.log("filepath0",result.data.name);
        setProduct(result.data);
      }
      
    
      useEffect(()=>{
        productdata();
      },[])


    

    return product;
}

export function useGetProduct(id){
    
    const[productdetails,setProductdetail]=useState([]);

    async function productDetails(){
        let result2= await axios.get("/api/getProduct/"+id);
        //result2 = await result2.json();
        console.log("productdetail",result2);
        setProductdetail(result2.data);
      }
      useEffect(()=>{
        productDetails();
      },[])



    return productdetails;
}