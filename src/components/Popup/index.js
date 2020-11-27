import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentImage, closePopup } from '../../redux/slices/gallerySlice';
import styles from './popup.module.scss';

function Popup(props) {
    const dispatch = useDispatch();
    const currentAlbumImages = useSelector(state => state.albums.currentAlbumImages);
    const currentImage = useSelector(state => state.albums.currentImage);
    const [offset, setOffset] = useState(0);

    const handleImageClick = id => () => {
        dispatch(setCurrentImage(id));
    }

    const handleClose = () => {
        dispatch(closePopup());
    }

    const handleLeftClick = () => {
        if (offset > 0) {
            setOffset(offset - 1);
        }
    }

    const handleRightClick = () => {
        if (offset < currentAlbumImages.length) {
            setOffset(offset + 1);
        }
    }

    return (
        <div className={styles.popup}>
            <div className={styles.content}>
                <img className={styles.image} src={currentImage.url} alt={props.alt}/>
                <button className={styles.close} onClick={handleClose}>Close</button>
                <div className={styles.carousel}>
                    {offset > 0 && <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handleLeftClick}>Left</button>}
                    {offset < currentAlbumImages.length - 1 && <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleRightClick}>Right</button>}
                    <div className={styles.carouselContent} style={{left: -offset * 9 + 'rem'}}>
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
        </div>
    );
}

export default Popup;