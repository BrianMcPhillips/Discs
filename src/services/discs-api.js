import request from 'superagent';

const URL = process.env.REACT_APP_URL;


export const fetchDiscs = () => { 
  const token = localStorage.getItem('token');
  try {
    return request.get(`${URL}/api/discs`).set('Authorization', token);
  } catch(e) {
    throw e
  }
}

export const fetchDiscById = id => {
  const token = localStorage.getItem('token');
  try {
    return request.get(`${URL}/api/discs/${id}`).set('Authorization', token);
  } catch(e) {
    throw e
  }
}

export const createDisc = discData => { 
  const token = localStorage.getItem('token');
  try {
    return request.post(`${URL}/api/discs`).set('Authorization', token).send(discData); 
  } catch(e) {
    throw e 
  }
}
export const fetchBrands = () => {
  try {
    return request.get(`${URL}/api/brands`);
  } catch(e) {
    throw e 
  }
}
export const deleteDisc = id => {
  const token = localStorage.getItem('token');
  try {
  return request.delete(`${URL}/api/discs/${id}`).set('Authorization', token);
  } catch(e) {
    throw e
  }
}
export const updateDisc = (id, updatedDisc) => {
  const token = localStorage.getItem('token');
  try {
    return request.put(`${URL}/api/discs/${id}`).set('Authorization', token).send(updatedDisc);
  } catch(e) {
    throw e
  }
}
export const signUp = userInfo => {
  try {
  return request.post(`${URL}/auth/signup`).send(userInfo);
  } catch(e) {
    throw e 
  }
}
export const signIn = userInfo => {
  try {
    return request.post(`${URL}/auth/signin`).send(userInfo);
  } catch(e) {
    throw e
  }
}
