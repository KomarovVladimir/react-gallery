import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../Image';
import Popup from '../Popup';
import layout from '../../scss/layout.module.scss';

function ImagesList() {
    const currentAlbum = useSelector(state => state.albums.currentAlbum);
    const currentImage = useSelector(state => state.albums.currentImage);
    
    return (
        <div className={layout.gallery}>
            {currentImage &&  <Popup />}
            {currentAlbum && currentAlbum.images.map(image => <Image key={image.id} {...image} />)}
        </div>
    );
}

export default ImagesList;