import React from 'react';
import { useSelector } from 'react-redux';
import styles from './popup.module.scss';

function Popup(props) {
    const currentAlbumImages = useSelector(state => state.albums.currentAlbum.images);

    return (
        <div className={styles.popup}>
            <div className={styles.content}>
                <img className={styles.image} src={props.url} alt={props.alt}/>
                <button className={styles.close}>Close</button>
                <div className={styles.carousel}>
                    <button className={`${styles.arrow} ${styles.arrowLeft}`}>Left</button>
                    <button className={`${styles.arrow} ${styles.arrowRight}`}>Right</button>
                    {currentAlbumImages && currentAlbumImages.map(image => <img key={image.id} className={styles.carouselItem} src={image.thumbnailUrl} alt={image.title} />)}
                </div>
            </div>
        </div>
    );
}

export default Popup;