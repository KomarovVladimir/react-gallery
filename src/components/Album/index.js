import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setCurrentAlbumId } from '../../redux/slices/gallerySlice';
import styles from './album.module.scss';
import layout from '../../scss/layout.module.scss';

function Album(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        history.push(`/album/${props.title}`);
        dispatch(setCurrentAlbumId(props.id));
    }

    return (
        <div className={`${layout.item} ${styles.item}`} onClick={handleClick}>
            <img  className={styles.thumbnail} src={props.images[0].url} alt={props.alt} />
            <div className={styles.meta}>
                <span className={styles.name}>{props.title}</span>
                <span className={styles.label}>{props.images.length} images</span>
            </div>
        </div>
    );
}

export default Album;