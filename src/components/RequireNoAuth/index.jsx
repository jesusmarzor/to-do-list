import { Navigate } from "react-router-dom";
import {AuthConsumer} from "contexts/AuthContext";

export function RequireNoAuth({ children }){
  const {user} = AuthConsumer();
  if(user !== null){
    return <Navigate to="/"/>
  }
  return children;
}