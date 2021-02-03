import axios from 'axios';

const BASE_URL = 'https://goit-phonebook-api.herokuapp.com'; 

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function addUser(credentials) {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, credentials);
    token.set(data.token);
    return data;
};

export async function loginUser(credentials) {
    const { data } = await axios.post(`${BASE_URL}/users/login`, credentials);
    token.set(data.token);
    return data;
};

export async function logOutUser() {
    const { data } = await axios.post(`${BASE_URL}/users/logout`);
    token.unset();
    return data;
};

export async function fetchCurrentUser() {
    const { data } = await axios.get(`${BASE_URL}/users/current`)
    return data;
}

const authApi = { addUser, loginUser, logOutUser, fetchCurrentUser, token };

export default authApi;