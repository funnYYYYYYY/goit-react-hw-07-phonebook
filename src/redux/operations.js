import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63b7ff354d97e82aa3cbed99.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

export const addContacts = createAsyncThunk(
  'tasks/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
