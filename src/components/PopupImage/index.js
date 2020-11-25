import React from 'react';
import styles from './popupImage.scss';

function PopupImage(props) {
    // return <img  className={styles.thumbnail} src={props.src} alt={props.alt} />;
    return (
        <div className={styles.popup}>
            <button className={styles.close}></button>
            <div className={styles.carousel}>
                <button className={styles.leftArrow}></button>
                <button className={styles.rightArrow}></button>
                {/* <img src="" alt=""/> */}
            </div>
            <img className={styles.image} src={props.src} alt={props.alt}/>
        </div>
    );
}

export default PopupImage;