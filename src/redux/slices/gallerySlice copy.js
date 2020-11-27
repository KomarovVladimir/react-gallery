import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
  items: [],
  isLoading: false,
  popapIsOpenned: false,
  currentAlbum: {},
  currentImage: {}
};

export const albumsListSlice = createSlice({
    name: 'albums', 
    initialState,
    reducers: {
        reset: state => initialState,
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
        getImages: state => {
          state.isLoading = true;
        },
        getImagesSuccess: (state, action) => {
          state.isLoading = false;
          state.items = [...action.payload];
        },
        getImagesFailure: state => {
          state.isLoading = false;
        },
        setCurrentAlbum: (state, action) => {
          state.currentAlbum = state.items.find(album => album.id === action.payload)
        },
        setCurrentImage: (state, action) => {
          state.currentImage = state.currentAlbum.images.find(image => image.id === action.payload)
        },
        switchPopup: state => {
          state.popapIsOpenned = !state.popapIsOpenned;
        }
    },
  });

  export const { reset, getAlbums, getAlbumsSuccess, getAlbumsFailure, updateItems, setCurrentAlbum, setCurrentImage, switchPopup } = albumsListSlice.actions;
  
  export default albumsListSlice.reducer;