import React from 'react'
import { Link } from 'react-router-dom'

const Footer =() =>{
  return (
     <div className='footer'>
         <h4 className='text-center'> All Right reseved &copy; Topu Raihan</h4>
        <div className="text-center mt-3">
         <Link to={'/about'}>About</Link> |
         <Link to={'/contact'}>Contact</Link> |
         <Link to={'/policy'}>Policy</Link> 
        </div>
     </div>
  )
}

export default Footer