import { createContext, useContext, useState } from "react";
import { getusersRequest } from "../api/users";

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("No existe un contexto de usuarios");
    }

    return context;
}

export function UserProvider({children}) {

    const [userData, setUserData] = useState([]);

    const createPublicacion = async (publicacion) => {
        const res = await createPublicacionRequest(publicacion);
        console.log(res);

    }

    const getUsers = async () => {
        try {
            const res = await getusersRequest();
            console.log(res.data);
            setUserData(res.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const deletePublicacion = async (id) => {
        try {
            const res = await deletePublicacionRequest(id)
            if (res.status === 204) setPublicaciones(publicaciones.filter(publicacion => publicacion._id !== id))

            
        } catch (error) {
            console.log(error);
            
        }
    }

    const getPublicacion = async (id) => {
        try {
            const res = await getPublicacionRequest(id);
            return res.data;
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const updatePublicacion = async (id, datos) => {
        try {
            await updatePublicacionRequest(id, datos);
            
        } catch (error) {
            console.log(error);
            
        }

    }


    return (
        <UserContext.Provider value={{
            getUsers,
            userData
        }}>
            {children}
        </UserContext.Provider>
    )
}