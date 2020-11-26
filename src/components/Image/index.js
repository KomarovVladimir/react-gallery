import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentImage, switchPopup } from '../../redux/slices/gallerySlice';
import layout from '../../scss/layout.module.scss';
import styles from './image.module.scss';

function Image(props) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(switchPopup());
        dispatch(setCurrentImage(props.id));
    }

    return (
        <div className={layout.item} onClick={handleClick}>
            <img className={styles.item} src={props.url} alt={props.title} />
        </div>
    );
}

export default Image;