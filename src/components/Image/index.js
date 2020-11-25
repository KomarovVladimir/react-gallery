import React from 'react';
import styles from './Image.scss';

function Image(props) {
    return <img  className={styles.thumbnail} src={props.src} alt={props.alt} />;
}

export default Image;