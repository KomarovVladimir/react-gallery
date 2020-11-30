import { put, takeEvery, select } from 'redux-saga/effects';
import { 
    getAlbums,
    getAlbumsSuccess,
    getAlbumsFailure, 
    getAlbumImages, 
    getAlbumImagesSuccess,
    getAlbumImagesFailure,
    getAlbumsMeta,
    getAlbumsMetaSuccess,
    getAlbumsMetaFailure
} from './slices/gallerySlice';

function* requestAlbums() {
    try {
        let albumsResponse = yield fetch('https://jsonplaceholder.typicode.com/albums?_start=0&_limit=16');
        const albums = yield albumsResponse.json();

        yield put({ type: getAlbumsSuccess.type, payload: albums });

        yield put({ type: getAlbumsMeta.type, payload: albums });
    } catch (error) {
        console.error(error);
        yield put({ type: getAlbumsFailure.type });
    }
}

function* requestAlbumsMeta(action) {
    try {
        let albumsMeta = [];

        for (let album of action.payload) {
            let firstImageResponse = yield fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_start=0&_limit=1`);
            const imagesNumber = firstImageResponse.headers.get('x-total-count');
            const firstPhoto = yield firstImageResponse.json();
            albumsMeta.push({thumbnailUrl: firstPhoto[0].url, imagesNumber, albumId: firstPhoto[0].albumId});
        }
        
        yield put({ type: getAlbumsMetaSuccess.type, payload: albumsMeta });
    } catch (error) {
        console.error(error);
        yield put({ type: getAlbumsMetaFailure.type });
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
    yield takeEvery(getAlbumsMeta.type, requestAlbumsMeta);
}

export default albumsWatcher;