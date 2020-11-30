import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setCurrentAlbumId, getAlbumMeta } from '../../redux/slices/albumsSlice';
import styles from './album.module.scss';
import layout from '../../scss/layout.module.scss';

function Album(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getAlbumMeta(props.id));
    }, [])
    
    const handleClick = () => {
        history.push(`/album/${props.id}`);
        dispatch(setCurrentAlbumId(props.id));
    }

    return (
        <div className={`${layout.item} ${styles.item}`} onClick={handleClick}>
            {props.thumbnailUrl && <img  className={styles.thumbnail} src={props.thumbnailUrl} alt={props.title} />}
            <div className={styles.meta}>
                <span className={styles.name}>{props.title}</span>
                {props.imagesNumber && <span className={styles.label}>{props.imagesNumber} images</span>}
            </div>
        </div>
    );
}

export default Album;