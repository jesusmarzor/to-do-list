import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import {AuthConsumer} from "contexts/AuthContext";

export function RequireAuth({ children }){
  const location = useLocation();
  const {user} = AuthConsumer();
  return (user) ? children : <Navigate to="/login" state={location}/>;
}