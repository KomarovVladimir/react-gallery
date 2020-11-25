import React from 'react';
import styles from './album.scss';

function Album(props) {
    return (
        <div className={styles.item}>
            <img  className={styles.thumbnail} src={props.src} alt={props.alt} />
            <span className={styles.name}>{props.name}</span>
            <span className={styles.label}>{props.picturesNumber} pictures</span>
        </div>
    );
}

export default Album;