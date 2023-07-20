import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6499e7ff79fbe9bcf840268a.mockapi.io';

// First, create the thunk
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'tasks/addTask',
  async ({ id, name, phone }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', { id, name, phone });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
