import { createAsyncThunk } from '@reduxjs/toolkit';
import contactApi from 'services/contacts-api';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await contactApi.fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk('contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
        return await contactApi.addContact(contact);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async contact => {
//         return await contactApi.addContact(contact);
// }
// );

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            await contactApi.deleteContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// export const addContact = (name, number) => async dispatch => {
//     const contact = {
//         name,
//         number
//     }

//     dispatch(contactsActions.addContactRequest());

//     try {
//         await contactApi.addContact(contact);
//         dispatch(contactsActions.addContactSuccess(contact))
//     }
//     catch (error) {
//         dispatch(contactsActions.addContactError(error))
//     }
// };

// export const deleteContact = id => async dispatch => {
//     dispatch(contactsActions.deleteContactRequest());

//     try {
//         await contactApi.deleteContact(id);
//         dispatch(contactsActions.deleteContactSuccess(id))
//     }
//     catch (error) {
//         dispatch(contactsActions.deleteContactError(error))
//         } 
// };
