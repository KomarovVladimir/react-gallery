import { put, takeEvery } from 'redux-saga/effects';
import { 
    getAlbums,
    getAlbumsSuccess,
    getAlbumsFailure, 
    getAlbumImages, 
    getAlbumImagesSuccess, 
    getAlbumImagesFailure } from './slices/gallerySlice';

function* requestAlbums() {
    try {
        let response = yield fetch('https://jsonplaceholder.typicode.com/albums');
        const albums = yield response.json();
        
        yield put({ type: getAlbumsSuccess.type, payload: albums });
    } catch (error) {
        console.error(error);
        yield put({ type: getAlbumsFailure.type });
    }
}

function* requestAlbumImages(action) {
    try {
        let response = yield fetch(`https://jsonplaceholder.typicode.com/albums/${action.payload}/photos`);
        const images = yield response.json();

        yield put({ type: getAlbumImagesSuccess.type, payload: {
            id: action.payload,
            thumbnailUrl: images[0].thumbnailUrl,
            images: [...images],
        } });
    } catch (error) {
        console.error(error);
        yield put({ type: getAlbumImagesFailure.type });
    }
}

function* albumsWatcher() {
    yield takeEvery(getAlbums.type, requestAlbums);
    yield takeEvery(getAlbumImages.type, requestAlbumImages);
}

export default albumsWatcher;