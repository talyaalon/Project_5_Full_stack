import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, user , setUser}) => {
  if (!user) {
    const user_localStorage = window.localStorage.getItem('user')
    if (!user_localStorage) return <Navigate to='Login' />;
    setUser(JSON.parse(user_localStorage))
  }
  return children;
};

export default ProtectedRoute;
