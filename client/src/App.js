
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

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='*' element={<PagenotFound/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/dashboard' element={<PrivetRoute/>}>
      <Route path='user' element={<Dashboard/>}/>
      </Route >

      <Route path='/dashboard' element={<AdminRoute/>}>
        <Route path='admin' element={<Admin/>}/>
      </Route>
       
    </Routes>
  
    </>
  );
}

export default App;
