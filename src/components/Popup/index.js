import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentImage } from '../../redux/slices/gallerySlice';
import styles from './popup.module.scss';

function Popup(props) {
    const dispatch = useDispatch();
    const currentAlbumImages = useSelector(state => state.albums.currentAlbum.images);
    const currentImage = useSelector(state => state.albums.currentImage);

    const handleImageClick = id => () => {
        dispatch(setCurrentImage(id));
    }

    return (
        <div className={styles.popup}>
            <div className={styles.content}>
                <img className={styles.image} src={currentImage.url} alt={props.alt}/>
                <button className={styles.close}>Close</button>
                <div className={styles.carousel}>
                    <button className={`${styles.arrow} ${styles.arrowLeft}`}>Left</button>
                    <button className={`${styles.arrow} ${styles.arrowRight}`}>Right</button>
                    {currentAlbumImages && currentAlbumImages.map(image => <img 
                        key={image.id} 
                        className={styles.carouselItem} 
                        src={image.thumbnailUrl} 
                        alt={image.title} 
                        onClick={handleImageClick(image.id)}
                    />)}
                </div>
            </div>
        </div>
    );
}

export default Popup;