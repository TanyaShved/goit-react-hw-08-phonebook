import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getValue = state => state.contacts.filter;

export const getLoading = state => state.contacts.loading;

export const getError = state => state.contacts.error;

export const getFilteredContact = createSelector(
  [getContacts, getValue],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
 
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),)
  }
    );
    





