import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAlbumImages } from '../../redux/slices/gallerySlice';
import styles from './album.module.scss';
import gridStyles from '../../scss/grid.module.scss';

function Album(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbumImages(props.id));
    }, []);

    const handleClick = () => {
        // dispatch();
    }

    return (
        <div className={gridStyles.item} onClick={handleClick}>
            <img  className={styles.thumbnail} src={props.thumbnailUrl} alt={props.alt} />
            <div className={styles.meta}>
                <span className={styles.name}>{props.title}</span>
                <span className={styles.label}>{props.imagesNumber} images</span>
            </div>
        </div>
    );
}

export default Album;