import { put, takeEvery } from 'redux-saga/effects';
import { requestAlbums, requestAlbumsSuccess, requestAlbumsFailure } from './slices/albumsListSlice';

function* requestGalleries() {
    try {
        let response = yield fetch('https://jsonplaceholder.typicode.com/albums');
        const albums = yield response.json();
        yield put({ type: requestAlbumsSuccess.type, payload: albums });
    } catch (error) {
        console.error(error);
        yield put({ type: requestAlbumsFailure.type });
    }
}

function* requestGalleriesWatcher() {
    yield takeEvery(requestAlbums.type, requestGalleries);
}

export default requestGalleriesWatcher;