import React from 'react';
import styles from './popup.module.scss';

function Popup(props) {
    return (
        <div className={styles.popup}>
            <div className={styles.content}>
                <img className={styles.image} src={props.url} alt={props.alt}/>
                <button className={styles.close}>Close</button>
                <div className={styles.carousel}>
                    <button className={`${styles.arrow} ${styles.arrowLeft}`}>Left</button>
                    <button className={`${styles.arrow} ${styles.arrowRight}`}>Right</button>
                    {/* <img src="" alt=""/> */}
                </div>
            </div>
        </div>
    );
}

export default Popup;