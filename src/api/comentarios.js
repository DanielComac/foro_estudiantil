import axios from './axios';

export const getComentariosRequest = () => axios.get('/comentarios');

export const getComentarioRequest = (id) => axios.get(`/comentario/${id}`);

export const createComentarioRequest = (comentario) => axios.post('/comentarios', comentario);

export const updateComentarioRequest = (id, comentario) => axios.put(`/comentarios/${id}`, comentario);

export const deleteComentarioRequest = (id) => axios.delete(`/comentarios/${id}`);