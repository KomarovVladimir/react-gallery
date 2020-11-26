import React from 'react';
import { useSelector } from 'react-redux';
import styles from './imagesList.module.scss';
import layout from '../../scss/layout.module.scss';
import Image from '../Image';

function ImagesList() {
    const currentAlbum = useSelector(state => state.albums.currentAlbum);
    
    return (
        <div className={layout.gallery}>
            {currentAlbum.images.map(image => <Image key={image.id} {...image} />)}
        </div>
    );
}

export default ImagesList;