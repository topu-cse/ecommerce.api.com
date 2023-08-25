import React from 'react';
import { Link } from 'react-router-dom';
import {GiShoppingBag} from 'react-icons/gi'
import { useAuth } from '../Context/Auth';
import toast from 'react-hot-toast';

const Header = () => {
  const [auth,setAuth]=useAuth();
  const handeleLogOut =()=>{
     setAuth({
      ...auth,user:null,token:''
     })
     localStorage.removeItem('auth')
     toast.success('Logout successfully')
  }
    return (
        <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
       <Link to={'/'} className="navbar-brand"><GiShoppingBag/>Ecommerce app</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link to={'/'} className="nav-link  " aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/category'} className="nav-link" >category</Link>
        </li>

        {
          !auth.user ? (<>
           <li className="nav-item">
          <Link to={'/register'} className="nav-link" >Register</Link>
        </li>
        <li className="nav-item">
          <Link to={'/login'} className="nav-link " >Login</Link>
        </li>

          </>):(<>

            <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {auth?.user.name}
          </Link>
          <ul className="dropdown-menu">
          <li className="nav-item">
          <Link to={`/dashboard/ ${auth?.user?.role ===1 ? "admin" : "user"}` } className="dropdown-item" >Dashboard</Link>
          </li>
           <li><Link onClick={handeleLogOut} to={'/login'} className="dropdown-item">Logout</Link></li>
          </ul>
        </li>
          
            
        </>)
        }
       
        <li className="nav-item">
          <Link to={'/cart'} className="nav-link " >Cart (0)</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

        </>
    );
};

export default Header;