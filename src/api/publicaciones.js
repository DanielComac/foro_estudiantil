import axios from './axios';

export const getPublicacionesRequest = () => axios.get('/publicaciones');

export const getPublicacionRequest = (id) => axios.get(`/publicaciones/${id}`);

export const createPublicacionRequest = (publicacion) => axios.post('/publicaciones', publicacion);

export const updatePublicacionRequest = (id, publicacion) => axios.put(`/publicaciones/${id}`, publicacion);

export const deletePublicacionRequest = (id) => axios.delete(`/publicaciones/${id}`);
