import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import {AuthConsumer} from "contexts/AuthContext";

export function RequireAuth({ children }){
  const location = useLocation();
  const {user} = AuthConsumer();
  if(user === null){
    return <Navigate to="/login" state={location}/>
  }
  return children;
}