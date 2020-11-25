import { createSlice } from '@reduxjs/toolkit';

export const imagesListSlice = createSlice({
    name: 'images', 
    initialState: {
      items: [],
      isLoading: false
    },
    reducers: {
        request: state => {
          state.isLoading = true;
        },
        requestSuccess: (state, action) => {
          state.isLoading = false;
          state.items = [...action.payload];
        },
        requestFailure: state => {
          state.isLoading = false;
        },
    },
  });

  export const { request, requestSuccess, requestFailure } = imagesListSlice.actions;
  
  export default imagesListSlice.reducer;