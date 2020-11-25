import { createSlice } from '@reduxjs/toolkit';

export const galleriesListSlice = createSlice({
    name: 'galleries', 
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

  export const { requestGalleries, requestGalleriesSuccess, requestGalleriesFailure } = galleriesListSlice.actions;
  
  export default galleriesListSlice.reducer;