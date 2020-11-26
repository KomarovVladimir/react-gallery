import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../Image';
import Popup from '../Popup';
import layout from '../../scss/layout.module.scss';

function ImagesList() {
    const currentAlbum = useSelector(state => state.albums.currentAlbum);
    
    return (
        <Popup />
        // <div className={layout.gallery}>
        //     {currentAlbum && currentAlbum.images.map(image => <Image key={image.id} {...image} />)}
        // </div>
    );
}

export default ImagesList;