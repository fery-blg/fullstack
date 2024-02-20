import { useState, useEffect, } from "react";
import { useUser } from "../store/userstore";
import { Navigate } from "react-router-dom";
import { axiosClient } from "./service";
async function checkAuth(path) {
    try {
      await axiosClient.get(
        "/" + path,
  
        {
          withCredentials: true,
        }
      );
      return true;
    } catch (error) {
      return false;
    }
  }
  

export function Auth({ children}) {
    const [isAuth , setIsAuth] = useState(null);
    const [loading , setLoading] = useState(true);
    const [setUser] = useUser((state) => [state.setUser]);

    useEffect(() => {
        checkAuth("check")
        .then((res)=>{
            setIsAuth(res);
            if ( res == false)setUser({});
            setLoading(false);})
            .catch(()=>{
                setUser({})
                setIsAuth(false);
                setLoading(false);
            })
    },[])
    return (loading ? null : isAuth ? children : <Navigate to="/login" />)

}

