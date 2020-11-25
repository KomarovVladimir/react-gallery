import React from 'react';
import styles from './galleryImage.scss';

function GalleryImage(props) {
    return <img  className={styles.thumbnail} src={props.src} alt={props.alt} />;
}

export default GalleryImage;