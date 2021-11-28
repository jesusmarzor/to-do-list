import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";

export function RequireAuth({ children, isAuthenticated}){
  const location = useLocation();
  if(!isAuthenticated){
    return <Navigate to="/login" state={location}/>
  }
  return children;
}