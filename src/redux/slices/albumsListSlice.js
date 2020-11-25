import { createSlice } from '@reduxjs/toolkit';

export const albumsListSlice = createSlice({
    name: 'albums', 
    initialState: {
      items: [],
      isLoading: false
    },
    reducers: {
        requestAlbums: state => {
          state.isLoading = true;
        },
        requestAlbumsSuccess: (state, action) => {
          state.isLoading = false;
          state.items = [...action.payload];
        },
        requestAlbumsFailure: state => {
          state.isLoading = false;
        },
    },
  });

  export const { requestAlbums, requestAlbumsSuccess, requestAlbumsFailure } = albumsListSlice.actions;
  
  export default albumsListSlice.reducer;