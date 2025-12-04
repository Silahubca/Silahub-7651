import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    try {
      const user = localStorage.getItem('silahub_admin_user');
      const timestamp = localStorage.getItem('silahub_admin_login_time');
      
      if (user && timestamp) {
        const loginTime = parseInt(timestamp);
        const currentTime = Date.now();
        const hoursSinceLogin = (currentTime - loginTime) / (1000 * 60 * 60);
        
        // Auto logout after 24 hours
        if (hoursSinceLogin < 24) {
          setIsAuthenticated(true);
        } else {
          // Clear expired session
          localStorage.removeItem('silahub_admin_user');
          localStorage.removeItem('silahub_admin_login_time');
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Auth check error:', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AuthGuard;