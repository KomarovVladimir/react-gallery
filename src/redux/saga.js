import { put, takeEvery } from 'redux-saga/effects';
import { 
    getAlbums,
    getAlbumsSuccess,
    getAlbumsFailure
} from './slices/gallerySlice';

function* requestAlbums() {
    try {
        let albumsResponse = yield fetch('https://jsonplaceholder.typicode.com/albums?_start=0&_limit=16');
        const albums = yield albumsResponse.json();

        let filledAlbums = [];
        for (let album of albums) {
            let photosResponse = yield fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`);
            const photos = yield photosResponse.json();
            filledAlbums.push({...album, images: photos});
        }
        
        yield put({ type: getAlbumsSuccess.type, payload: filledAlbums });
    } catch (error) {
        console.error(error);
        yield put({ type: getAlbumsFailure.type });
    }
}

function* albumsWatcher() {
    yield takeEvery(getAlbums.type, requestAlbums);
}

export default albumsWatcher;