import axios from 'axios';

const BASE_URL = 'https://goit-phonebook-api.herokuapp.com'; 

export async function fetchContacts() {
    const { data } = await axios.get(`${BASE_URL}/contacts`)
    return data;
}

export async function addContact(contact) {
    const { data } = await axios.post(`${BASE_URL}/contacts`, contact);
    return data;
};

export async function deleteContact(id) {
    const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
    return data;
};

const contactApi = { fetchContacts, addContact, deleteContact };

export default contactApi;
