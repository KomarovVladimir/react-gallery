import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
  items: [],
  currentAlbumImages: [],
  currentImage: {},
  isLoading: false,
  popapIsOpenned: false,
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
        getAlbumMeta: state => {
          state.isLoading = true;
        },
        getAlbumMetaSuccess: (state, action) => {
          state.isLoading = false;
          state.items = state.items.map(album => album.id === action.payload.albumId ? {...album, 
            imagesNumber: action.payload.imagesNumber,
            thumbnailUrl: action.payload.thumbnailUrl
          } : album);
        },
        getAlbumMetaFailure: state => {
          state.isLoading = false;
        },
        setCurrentAlbumId: (state, action) => {
          state.currentAlbumId = action.payload;
        },
        getAlbumImages: state => {
          state.isLoading = true;
        },
        getAlbumImagesSuccess: (state, action) => {
          state.isLoading = false;
          state.currentAlbumImages = [...action.payload];
        },
        getAlbumImagesFailure: state => {
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
        setCurrentImage: (state, action) => {
          state.currentImage = state.currentAlbumImages.find(image => image.id === action.payload);
        },
        openPopup: state => {
          state.popapIsOpenned = true;
        },
        closePopup: state => {
          state.popapIsOpenned = false;
        }
    },
  });

  export const { 
    reset,
    getAlbums,
    getAlbumsSuccess,
    getAlbumsFailure,
    getAlbumMeta,
    getAlbumMetaSuccess,
    getAlbumMetaFailure,
    getAlbumImages,
    getAlbumImagesSuccess,
    getAlbumImagesFailure,
    setCurrentAlbumId,
    setCurrentImage,
    openPopup,
    closePopup } = albumsListSlice.actions;
  
  export default albumsListSlice.reducer;