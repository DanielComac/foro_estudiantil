import axios from './axios';

// const API = 'http://localhost:3000/api';

export const peticionRegistro = (user) => axios.post(`/registro`, user);

export const peticionInicioSesion = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get('/verify')
