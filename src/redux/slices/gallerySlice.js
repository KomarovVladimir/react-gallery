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
    },
  });

  export const { getAlbums, getAlbumsSuccess, getAlbumsFailure, updateItems } = albumsListSlice.actions;
  
  export default albumsListSlice.reducer;

  // getAlbumImages: (state, action) => {
  //   state.items = state.items.map(item => (
  //     item.id === action.payload.id ? {
  //       ...item, 
  //       thumbnailIsLoading: true,
  //   } : item));
  // },
  // getAlbumImagesSuccess: (state, action) => {
  //   state.items = state.items.map(item => (
  //     item.id === action.payload.id ? {
  //       ...item, 
  //       thumbnailUrl: action.payload.thumbnailUrl,
  //       images: action.payload.images,
  //       imagesNumber: action.payload.images.length,
  //       thumbnailIsLoading: false,
  //   } : item));
  // },
  // getAlbumImagesFailure: (state, action) => {
  //   state.items = state.items.map(item => (
  //     item.id === action.payload.id ? {
  //       ...item, 
  //       thumbnailIsLoading: false,
  //   } : item));
  // },