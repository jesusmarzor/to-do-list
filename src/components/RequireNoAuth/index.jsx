import { Navigate } from "react-router-dom";
import {AuthConsumer} from "contexts/AuthContext";

export function RequireNoAuth({ children }){
  const {user} = AuthConsumer();
  return (user) ? <Navigate to="/"/> : children;
}