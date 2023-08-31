
import{ Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PagenotFound from './pages/PagenotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/user/Dashboard';
import PrivetRoute from './components/Routes/privet';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import Admin from './pages/Admin/Admin';
import CreateCategori from './pages/Admin/CreateCategori';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Profile from './pages/user/Profile';
import Oders from './pages/user/Oders';
import Products from './pages/Admin/Products';
import UpdateProducts from './pages/Admin/UpdateProducts';
import Search from './pages/Search';
import ProductsDetails from './pages/ProductsDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/product/:slug' element={<ProductsDetails/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/category/:slug' element={<CategoryProduct/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='*' element={<PagenotFound/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/dashboard' element={<PrivetRoute/>}>
      <Route path='user' element={<Dashboard/>}/>
      <Route path='user/profile' element={<Profile/>}/>
      <Route path='user/orders' element={<Oders/>}/>
      </Route >

      <Route path='/dashboard' element={<AdminRoute/>}>
        <Route path='admin' element={<Admin/>}/>
        <Route path='admin/create-category' element={<CreateCategori/>}/>
        <Route path='admin/create-product' element={<CreateProduct/>}/>
        <Route path='admin/users' element={<Users/>}/>
        <Route path='admin/products' element={<Products/>}/>
        <Route path='admin/product/:slug' element={<UpdateProducts/>}/>
      </Route>
       
    </Routes>
  
    </>
  );
}

export default App;
