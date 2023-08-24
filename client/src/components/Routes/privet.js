import { useEffect, useState } from "react";
import { useAuth } from "../Context/Auth";
import { Outlet } from "react-router-dom";
import axios from 'axios'
import Spinner from "../Spinner/Spinner";
export default function PrivetRoute(){
    const [ok,setOk]=useState(false)
    const [auth,setAuth]=useAuth()
    useEffect(()=>{
        const authCheack = async()=>{
            const res = await axios.get('/api/v1/auth/user-auth');
            if(res.data.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }
        if(auth?.token)authCheack()
    },[auth?.token])
    return ok ? <Outlet/>: <Spinner/>;
}