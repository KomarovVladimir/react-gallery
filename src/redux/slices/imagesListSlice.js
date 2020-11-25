import { createSlice } from '@reduxjs/toolkit';

export const imagesListSlice = createSlice({
    name: 'images', 
    initialState: {
      items: [],
      isLoading: false
    },
    reducers: {
        requestImages: state => {
          state.isLoading = true;
        },
        requestImagesSuccess: (state, action) => {
          state.isLoading = false;
          state.items = [...action.payload];
        },
        requestImagesFailure: state => {
          state.isLoading = false;
        },
    },
  });

  export const { requestImages, requestImagesSuccess, requestImagesFailure } = imagesListSlice.actions;
  
  export default imagesListSlice.reducer;