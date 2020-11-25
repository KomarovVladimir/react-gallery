import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAlbumImages } from '../../redux/slices/gallerySlice';
import styles from './album.module.scss';

function Album(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbumImages(props.id));
    }, []);

    const handleClick = albumId => () => {
        dispatch();
    }

    return (
        <div className={styles.item}>
            <img  className={styles.thumbnail} src={props.thumbnailUrl} alt={props.alt} />
            <span className={styles.name}>{props.title}</span>
            <span className={styles.label}>{props.imagesNumber} images</span>
        </div>
    );
}

export default Album;