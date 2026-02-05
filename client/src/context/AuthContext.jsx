import { createContext, useContext, useState, useEffect } from "react";
import authService from '../services/authService';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if user is logged in on mount
        const currentUser = authService.getCurrentUser();
        if (currentUser) {
            setUser(currentUser);
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        try {
            setLoading(true);
            setError(null);
            const response = await authService.login(credentials);
            setUser(response.data.user);
            return response;
        } catch (error) {
            setError(error.response?.data?.message || 'Login failed');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        try {
            setLoading(true);
            setError(null);
            const response = await authService.register(userData);
            return response;
        } catch (error) {
            setError(error.response?.data?.message || 'Registration failed');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            await authService.logout();
            setUser(null);
        } catch (error) {
            console.error('Logout error:', error);
            // Still clear user on frontend even if backend fails
            setUser(null);
        } finally {
            setLoading(false);
        }
    };
    
    const value = {
        user,
        login,
        register,
        logout,
        loading,
        error,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}