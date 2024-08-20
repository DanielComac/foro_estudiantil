import axios from './axios';

export const getusersRequest = () => axios.get('/users');

export const updateUserRequest = (id, data) => axios.patch(`/users/${id}`, data);