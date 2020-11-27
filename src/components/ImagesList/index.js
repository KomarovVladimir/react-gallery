import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlbumImages } from '../../redux/slices/gallerySlice';
import Image from '../Image';
import Popup from '../Popup';
import layout from '../../scss/layout.module.scss';

function ImagesList() {
    const dispatch = useDispatch();
    const currentAlbumId = useSelector(state => state.albums.currentAlbumId);
    const currentAlbumImages = useSelector(state => state.albums.currentAlbumImages);
    const popapIsOpenned = useSelector(state => state.albums.popapIsOpenned);

    useEffect(() => {
        dispatch(getAlbumImages(currentAlbumId));
    }, []);
    
    return (
        <div className={layout.gallery}>
            {popapIsOpenned &&  <Popup />}
            {currentAlbumImages && currentAlbumImages.map(image => <Image key={image.id} {...image} />)}
        </div>
    );
}

export default ImagesList;