import React from 'react';
import styles from './popup.module.scss';

function Popup(props) {
    return (
        <div className={styles.popup}>
            <div className={styles.content}>
                <button className={styles.close}>Close</button>
                <img className={styles.image} src={props.src} alt={props.alt}/>
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