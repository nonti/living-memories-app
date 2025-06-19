import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
const ProtectedRoute = ({ allowedRoles }) => {
  const { loading, userRole} = useAuth();
  const location = useLocation();

  if(loading){
    return <div>Loading authentication....</div>
  }

  if(!loading){
    <Navigate to='/login' state={{from:location}} replace/>
  }

  if(allowedRoles && allowedRoles.length > 0){
    if(!userRole || !allowedRoles.includes(userRole)){
      if(userRole === 'admin'){
        return <Navigate to='/admin/dashboard' replace/>
      }else if(userRole === 'user'){
        return <Navigate to='/user/profile' replace/>
      }
      return<Navigate to='/' replace/>
    }
  }

  return <Outlet/>
}

export default ProtectedRoute