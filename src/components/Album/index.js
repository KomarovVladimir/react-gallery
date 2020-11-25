import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAlbumThumbnail } from '../../redux/slices/albumsListSlice';
import styles from './album.module.scss';

function Album(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbumThumbnail(props.id));
    }, []);

    return (
        <div className={styles.item}>
            <img  className={styles.Images} src={props.thumbnailUrl} alt={props.alt} />
            <span className={styles.name}>{props.title}</span>
            <span className={styles.label}>N pictures</span>
        </div>
    );
}

export default Album;