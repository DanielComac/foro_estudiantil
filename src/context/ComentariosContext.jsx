import { createContext, useContext, useState } from "react";
import { createComentarioRequest, getComentariosRequest, deleteComentarioRequest, updateComentarioRequest, getComentarioRequest } from "../api/comentarios";
import Cookies from 'js-cookie';



const ComentarioContext = createContext();

export const useComentario = () => {
    const context = useContext(ComentarioContext);

    if (!context) {
        throw new Error("No existe un contexto de comentarios");
    }

    return context;
}

export function ComentarioProvider({children}) {

    const [comentarios, setComentarios] = useState([]);

    const createComentario = async (comentario) => {
        try {
            const res = await createComentarioRequest(comentario);
            Cookies.set('publicacion', JSON.stringify(res.data.publicacion_id));
            console.log(res);
            
        } catch (error) {
            console.log(error);
            
        }
        

    }

    const getComentarios = async (comentario) => {
        try {
            const res = await getComentariosRequest(comentario);
            console.log(res.data);
            setComentarios(res.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const deleteComentario = async (id) => {
        try {
            const res = await deleteComentarioRequest(id)
            if (res.status === 204) setComentarios(comentarios.filter(comentario => comentario._id !== id))

            
        } catch (error) {
            console.log(error);
            
        }
    }

    const getComentario = async (id) => {
        try {
            const res = await getComentarioRequest(id);
            return res.data;
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const updateComentario = async (id, datos) => {
        try {
            await updateComentarioRequest(id, datos);
            
        } catch (error) {
            console.log(error);
            
        }

    }


    return (
        <ComentarioContext.Provider value={{
            createComentario,
            comentarios,
            getComentarios,
            deleteComentario,
            updateComentario,
            getComentario
          
        }}>
            {children}
        </ComentarioContext.Provider>
    )
}