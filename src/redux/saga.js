import { takeEvery } from 'redux-saga/effects';

function* requestGalleries() {
    try {
        let response = yield fetch('https://jsonplaceholder.typicode.com/albums');
        response = yield response.json();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

function* requestGalleriesWatcher() {
    yield takeEvery('galleries/request', requestGalleries);
}

export default requestGalleriesWatcher;