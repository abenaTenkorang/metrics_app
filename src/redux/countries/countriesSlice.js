import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '../../API/fetchData';

export const fetchCountries = createAsyncThunk('country/fetchCountries', async () => {
  const data = await fetchData();
  return data;
});

const initialState = {
  countries: [],
  status: 'idle',
  error: null,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => ({
      ...state,
      status: 'loading',
    })).addCase(fetchCountries.fulfilled, (state, action) => ({
      ...state,
      countries: action.payload,
      status: 'completed',
    })).addCase(fetchCountries.rejected, (state, action) => ({
      ...state,
      error: action.error,
      status: 'rejected',
    }));
  },
});

export default countrySlice.reducer;
