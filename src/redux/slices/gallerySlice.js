import { createSlice } from '@reduxjs/toolkit';

export const albumsListSlice = createSlice({
    name: 'albums', 
    initialState: {
      items: [],
      isLoading: false
    },
    reducers: {
        getAlbums: state => {
          state.isLoading = true;
        },
        getAlbumsSuccess: (state, action) => {
          state.isLoading = false;
          state.items = [...action.payload];
        },
        getAlbumsFailure: state => {
          state.isLoading = false;
        },
        setCurrentAlbum: (state, action) => {
          state.currentAlbum = state.items.find(album => album.id === action.payload);
        }
    },
  });

  export const { getAlbums, getAlbumsSuccess, getAlbumsFailure, updateItems, setCurrentAlbum } = albumsListSlice.actions;
  
  export default albumsListSlice.reducer;