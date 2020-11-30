import { put, takeEvery, select } from 'redux-saga/effects';
import { 
    getAlbums,
    getAlbumsSuccess,
    getAlbumsFailure, 
    getAlbumImages, 
    getAlbumImagesSuccess,
    getAlbumImagesFailure,
    getAlbumMeta,
    getAlbumMetaSuccess,
    getAlbumMetaFailure
} from './slices/gallerySlice';

function* requestAlbums() {
    try {
        let albumsResponse = yield fetch('https://jsonplaceholder.typicode.com/albums');
        const albums = yield albumsResponse.json();

        yield put({ type: getAlbumsSuccess.type, payload: albums });
    } catch (error) {
        console.error(error);
        yield put({ type: getAlbumsFailure.type });
    }
}

function* requestAlbumMeta(action) {
    try {
        let firstImageResponse = yield fetch(`https://jsonplaceholder.typicode.com/albums/${action.payload}/photos?_start=0&_limit=1`);
        const imagesNumber = firstImageResponse.headers.get('x-total-count');
        const firstPhoto = yield firstImageResponse.json();
        
        yield put({
            type: getAlbumMetaSuccess.type, 
            payload: {
                thumbnailUrl: firstPhoto[0].url,
                imagesNumber,
                albumId: firstPhoto[0].albumId
            }
        });
    } catch (error) {
        console.error(error);
        yield put({ type: getAlbumMetaFailure.type });
    }
}

function* requestAlbumImages(action) {
    try {
        let albumImagesResponse = yield fetch(`https://jsonplaceholder.typicode.com/albums/${action.payload}/photos`);
        const albumImages = yield albumImagesResponse.json();
        
        yield put({ type: getAlbumImagesSuccess.type, payload: albumImages });
    } catch (error) {
        console.error(error);
        yield put({ type: getAlbumImagesFailure.type });
    }
}

function* albumsWatcher() {
    yield takeEvery(getAlbums.type, requestAlbums);
    yield takeEvery(getAlbumImages.type, requestAlbumImages);
    yield takeEvery(getAlbumMeta.type, requestAlbumMeta);
}

export default albumsWatcher;