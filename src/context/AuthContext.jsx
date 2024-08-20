import { createContext, useState, useContext, useEffect } from "react";
import {peticionRegistro, peticionInicioSesion, verifyTokenRequest} from '../api/auth.js'
import Cookies from 'js-cookie';


export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
  };

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    var userId = ""

    const signup = async (user) => {
        try {
        const res = await peticionRegistro(user);
        console.log(res.data);
        setUser(res.data)
        Cookies.set('user', JSON.stringify(res.data.userId));
        Cookies.set('priv', JSON.stringify(res.data.priv));
        setIsAuthenticated(true);
            
        } catch (error) {
            console.log(error);
            
        }
    }
 
    const signin = async (user) => {
        try {
            const res = await peticionInicioSesion(user);
            console.log(res);
            setUser(res.data);
            console.log(user);
            Cookies.set('user', JSON.stringify(res.data.user));
            Cookies.set('priv', JSON.stringify(res.data.priv));
            setIsAuthenticated(true);
            

        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect( () => {
        async function checkLogin()  {
            const cookies = Cookies.get();

            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }

            try {
                const res = await verifyTokenRequest(cookies.token);
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }

                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
                
            } catch (error) {
                console.log(error);
                setIsAuthenticated(false);
                setUser(null);
            }

            
        }
        checkLogin();
    
    }, [])


    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            loading,
            user,
            isAuthenticated,
            userId
            

        }}>
            {children}

        </AuthContext.Provider>
    )
}