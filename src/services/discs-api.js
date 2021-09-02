import request from 'superagent';

const URL = process.env.REACT_APP_URL;

export const fetchDiscs = token => request.get(`${URL}/api/discs`).set('Authorization', token);

export const fetchDiscById = (id, token) => request.get(`${URL}/api/discs/${id}`).set('Authorization', token);

export const createDisc = (discData, token) => request.post(`${URL}/api/discs`).set('Authorization', token).send(discData); 

export const fetchBrands = token => request.get(`${URL}/api/brands`).set('Authorization', token);

export const deleteDisc = (id, token) => request.delete(`${URL}/api/discs/${id}`).set('Authorization', token);

export const updateDisc = (id, updatedDisc, token) => request.put(`${URL}/api/discs/${id}`).set('Authorization', token).send(updatedDisc);

export const signUp = (userInfo) => request.post(`${URL}/auth/signup`).send(userInfo);

export const signIn = (userInfo) => request.post(`${URL}/auth/signin`).send(userInfo);
