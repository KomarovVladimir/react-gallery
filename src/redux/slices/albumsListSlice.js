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
        getAlbumThumbnail: () => {},
        getAlbumThumbnailSuccess: (state, action) => {
          state.items = state.items.map(item => item.id === action.payload.id ? {...item, thumbnailUrl: action.payload.thumbnailUrl} : item)
        },
        getAlbumThumbnailFailure: (state, action) => {
          // state.items[action.payload].isLoadingImages = false;
        },
    },
  });

  export const { getAlbums, getAlbumsSuccess, getAlbumsFailure, updateItems, getAlbumThumbnail, getAlbumThumbnailSuccess, getAlbumThumbnailFailure } = albumsListSlice.actions;
  
  export default albumsListSlice.reducer;