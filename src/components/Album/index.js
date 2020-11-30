import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setCurrentAlbumId } from '../../redux/slices/gallerySlice';
import styles from './album.module.scss';
import layout from '../../scss/layout.module.scss';

function Album(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const albumsMeta = useSelector(state => state.albums.albumsMeta);
    const [currentAlbumMeta, setCurrentAlbumMeta] = useState(null)

    useEffect(() => {
        if (albumsMeta) {
            setCurrentAlbumMeta(albumsMeta.find(albumMeta => albumMeta.albumId === props.id));
        }
    }, [albumsMeta])
    
    const handleClick = () => {
        history.push(`/album/${props.title}`);
        dispatch(setCurrentAlbumId(props.id));
    }

    return (
        <div className={`${layout.item} ${styles.item}`} onClick={handleClick}>
            {currentAlbumMeta && <img  className={styles.thumbnail} src={currentAlbumMeta.thumbnailUrl} alt={props.title} />}
            <div className={styles.meta}>
                <span className={styles.name}>{props.title}</span>
                {currentAlbumMeta && <span className={styles.label}>{props.imagesNumber} images</span>}
            </div>
        </div>
    );
}

export default Album;