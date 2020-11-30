import { put, takeEvery } from 'redux-saga/effects';
import { 
    getAlbums,
    getAlbumsSuccess,
    getAlbumsFailure, 
    getAlbumImages, 
    getAlbumImagesSuccess,
    getAlbumImagesFailure,
} from './slices/gallerySlice';

function* requestAlbums() {
    try {
        let albumsResponse = yield fetch('https://jsonplaceholder.typicode.com/albums?_start=0&_limit=16');
        const albums = yield albumsResponse.json();

        let filledAlbums = [];
        for (let album of albums) {
            let firstImageResponse = yield fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_start=0&_limit=1`);
            const imagesNumber = firstImageResponse.headers.get('x-total-count');
            const firstPhoto = yield firstImageResponse.json();
            filledAlbums.push({...album, thumbnailUrl: firstPhoto[0].url, imagesNumber});
        }
        
        yield put({ type: getAlbumsSuccess.type, payload: filledAlbums });
    } catch (error) {
        console.error(error);
        yield put({ type: getAlbumsFailure.type });
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
}

export default albumsWatcher;