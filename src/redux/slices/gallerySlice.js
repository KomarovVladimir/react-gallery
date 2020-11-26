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
        setCurrentAlbumId: (state, action) => {
          state.currentAlbumId = action.payload;
        }
    },
  });

  export const { getAlbums, getAlbumsSuccess, getAlbumsFailure, updateItems, setCurrentAlbumId } = albumsListSlice.actions;
  
  export default albumsListSlice.reducer;