import request from 'superagent';

const URL = process.env.REACT_APP_URL;

export const fetchDiscs = () => request.get(`${URL}/discs`);

export const fetchDiscById = (id) => request.get(`${URL}/discs/${id}`);

export const createDisc = (discData) => request.post(`${URL}/discs`).send(discData); 
