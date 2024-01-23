import axios from 'axios';

const API = axios.create({
    baseURL:"http://localhost:8000/",
    headers: {

        'Authorization': "Bearer "+ localStorage.getItem("token"), // Include if you have an authentication token
        // Add any other headers you need
      }
});





export default API;