import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload)
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
