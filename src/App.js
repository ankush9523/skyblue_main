import logo from './logo.svg';
 import Home from './homepage/Home';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import CopyRights from './components/CopyRights';
import ProductList from './pages/ProductList';
import ProductDetail from './components/ProductDetail';
//import AdminHeader from './adminpanel/AdminHeader';
import Login from './adminpanel/Login';
import AddProduct from './adminpanel/AddProduct';
import Signup from './adminpanel/Signup';
import Errorpage from './components/Errorpage';
import Listing from './adminpanel/Listing'
import Protected from './adminpanel/Protected';
import Updateproducts from './adminpanel/UpdateProduct';
import { Suspense,lazy } from 'react';



const AdminHeader = lazy(() => import('./adminpanel/AdminHeader'));

function App() {
    

  return (
    <>

    <BrowserRouter>
   {/* <Navbar/>      
    <NavSearch/>  */}

      <Routes>
      <Route path='*' element={<Errorpage err={"Enter the correct url"} />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/productlist' element={<ProductList />}/>
        <Route path='/productdetail/:id' element={<ProductDetail />}/>
      <Route path='/admin/' element={<Suspense fallback={<h1>Loading admin header page</h1>}><AdminHeader /></Suspense> }> 
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Protected cmp={Signup }/>}/>
          <Route path='add' element={<Protected cmp ={AddProduct} />}/>
          <Route path='@ritesh_skyblue95_list' element={<Protected cmp={Listing}/>}/> 
          <Route path='update/:id' element={<Protected cmp={Updateproducts}/>}/> 
        </Route>
      </Routes>
      <Footer/>
      <CopyRights/>
    </BrowserRouter>
    </>
      
   
  );
}

export default App;
