import { createContext, useContext, useState } from "react";
import { createPublicacionRequest, getPublicacionesRequest, deletePublicacionRequest } from "../api/publicaciones";

const PublicacionContext = createContext();

export const usePublicacion = () => {
    const context = useContext(PublicacionContext);

    if (!context) {
        throw new Error("No existe un contexto de publicaciones");
    }

    return context;
}

export function PublicacionProvider({children}) {

    const [publicaciones, setPublicaciones] = useState([]);

    const createPublicacion = async (publicacion) => {
        const res = await createPublicacionRequest(publicacion);
        console.log(res);

    }

    const getPublicaciones = async (publicacion) => {
        try {
            const res = await getPublicacionesRequest(publicacion);
            console.log(res.data);
            setPublicaciones(res.data);
            
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


    return (
        <PublicacionContext.Provider value={{
            publicaciones,
            createPublicacion,
            getPublicaciones,
            deletePublicacion
        }}>
            {children}
        </PublicacionContext.Provider>
    )
}