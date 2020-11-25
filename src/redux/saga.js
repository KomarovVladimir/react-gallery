import { put, takeEvery } from 'redux-saga/effects';
import { 
    getAlbums,
    getAlbumsSuccess,
    getAlbumsFailure, 
    getAlbumThumbnail, 
    getAlbumThumbnailSuccess, 
    getAlbumThumbnailFailure } from './slices/albumsListSlice';

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

function* requestAlbumThumbnail(action) {
    try {
        let response = yield fetch(`https://jsonplaceholder.typicode.com/albums/${action.payload}/photos?_start=0&_limit=1`);
        const firstImage = yield response.json();

        yield put({ type: getAlbumThumbnailSuccess.type, payload: {
            id: action.payload,
            thumbnailUrl: firstImage[0].thumbnailUrl
        } });
    } catch (error) {
        console.error(error);
        yield put({ type: getAlbumThumbnailFailure.type });
    }
}

// function* requestImages(action) {
//     try {
//         let response = yield fetch(`https://jsonplaceholder.typicode.com/albums/${action.payload}/photos`);
//         const images = yield response.json();
//         console.log(images);
//     } catch (error) {
//         console.error(error);
//     }
// }

function* albumsWatcher() {
    yield takeEvery(getAlbums.type, requestAlbums);
    yield takeEvery(getAlbumThumbnail.type, requestAlbumThumbnail);
}

export default albumsWatcher;