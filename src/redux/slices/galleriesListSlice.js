import { createSlice } from '@reduxjs/toolkit';

export const galleriesListSlice = createSlice({
    name: 'galleries', 
    initialState: {
      items: [],
      isLoading: false
    },
    reducers: {
        requestGalleries: state => {
          state.isLoading = true;
        },
        requestGalleriesSuccess: (state, action) => {
          state.isLoading = false;
          state.items = [...action.payload];
        },
        requestGalleriesFailure: state => {
          state.isLoading = false;
        },
    },
  });

  export const { requestGalleries, requestGalleriesSuccess, requestGalleriesFailure } = galleriesListSlice.actions;
  
  export default galleriesListSlice.reducer;