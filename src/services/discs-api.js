import request from 'superagent';

const URL = process.env.REACT_APP_URL;
const token = localStorage.getItem('token');

export const fetchDiscs = () => { 
  try {
  request.get(`${URL}/api/discs`).set('Authorization', token);
  } catch(e) {
    throw e
  }
}

export const fetchDiscById = id => {
  try {
  request.get(`${URL}/api/discs/${id}`).set('Authorization', token);
  } catch(e) {
    throw e
  }
}

export const createDisc = discData => { 
  try {
    request.post(`${URL}/api/discs`).set('Authorization', token).send(discData); 
  } catch(e) {
    throw e 
  }
}
export const fetchBrands = () => {
  try {
    request.get(`${URL}/api/brands`);
  } catch(e) {
    throw e 
  }
}
export const deleteDisc = id => {
  try {
  request.delete(`${URL}/api/discs/${id}`).set('Authorization', token);
  } catch(e) {
    throw e
  }
}
export const updateDisc = (id, updatedDisc) => {
  try {
    request.put(`${URL}/api/discs/${id}`).set('Authorization', token).send(updatedDisc);
  } catch(e) {
    throw e
  }
}
export const signUp = userInfo => {
  try {
  request.post(`${URL}/auth/signup`).send(userInfo);
  } catch(e) {
    throw e 
  }
}
export const signIn = userInfo => {
  try {
  request.post(`${URL}/auth/signin`).send(userInfo);
  } catch(e) {
    throw e 
  }
}
