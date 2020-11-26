import React from 'react';
import { useSelector } from 'react-redux';
import styles from './imagesList.module.scss';
import layout from '../../scss/layout.module.scss';
import Image from '../Image';

function ImagesList() {
    const albums = useSelector(state => state.albums);
    const currentAlbumImages = albums.items.find(item => item.id === albums.currentAlbumId).images;
    
    return (
        <div className={layout.gallery}>
            {currentAlbumImages.map(image => <Image key={image.id} {...image} />)}
        </div>
    );
}

export default ImagesList;