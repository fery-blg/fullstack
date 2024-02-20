import axios from "axios";
import {useState , useEffect} from "react";
import { Navigate } from "react-router-dom";
import {useUser } from "../store/userstore"
export function Public ({children}){
    const [user ] = useUser ((state) =>[ state.user])

    
  return (
    <div>
        {user.email? ( <Navigate to={"/"}/>
        ):(children )}
    </div>
  )
}

