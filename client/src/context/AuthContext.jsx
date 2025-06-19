import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"

const AuthContext = createContext(null);


export const AuthProvider =({children}) =>{
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  

  useEffect(() => {
    const checkAuthStatus = () => {
      const storedToken = localStorage.getItem('mockAuthToken');
      const storedRole = localStorage.getItem('userRole');
      const storedUserEmail = localStorage.getItem('userEmail');

      if(storedToken === 'loggedIn' && storedRole && storedUserEmail){
        setAuthUser({
          id:'usr1',
          name:'Mock User',
          email:storedUserEmail,
          role: storedRole
        })
      }
      setLoading(false);
    }
    checkAuthStatus()
  },[])

  const login = async (credentials) =>{
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve,1000))
    console.log('Credentials received in AuthContext login:', credentials);

     let roleToAssign = 'user'; // Default role
    let userEmail = credentials.email; // Capture email for setting authUser

    // Mock login logic - decide role based on email for simplicity
    if (credentials.email === 'admin@mail.com' && credentials.password === 'password') {
      roleToAssign = 'admin';
    } else if (credentials.email === 'user@mail.com' && credentials.password === 'password') {
      roleToAssign = 'user';
    } else {
      setAuthUser(null);
      // toast.error('Mock login failed: Invalid credentials'); 
      setLoading(false);
      return; 
    }

    localStorage.setItem('mockAuthToken', 'loggedIn');
    localStorage.setItem('userRole', roleToAssign); 
    localStorage.setItem('userEmail', userEmail); 

    setAuthUser({
      id: 'usr1', 
      name: `Mock ${roleToAssign} User`, 
      email: userEmail,
      role: roleToAssign 
    });

    // Navigate based on role after successful login
    if (roleToAssign === 'admin') {
      navigate('/admin/dashboard');
    } else if (roleToAssign === 'user') {
      navigate('/user/profile');
    }
    // toast.success('Logged in successfully'); 
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('mockAuthToken');
    setAuthUser(null);
    navigate('/');
  }

  const authContextValue = {
    authUser, loading, 
    login, logout, 
    isLoggedIn:!!authUser,
    userRole: authUser ? authUser.role : null,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
       {loading ? (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          Authenticating...
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};