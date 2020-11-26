import React from 'react';
import layout from '../../scss/layout.module.scss';
import styles from './image.module.scss';

function Image(props) {
    return (
        <div className={layout.item}>
            <img className={styles.item} src={props.url} alt={props.title} />
        </div>
    );
}

export default Image;