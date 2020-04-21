import React from 'react';
import styles from './index.scss';
// import Logo from './Logo';

export default () => {

    return (
        <div className={styles["loading-screen"]}>
            <div className={styles["loading-screen-head"]}>
                <div className={styles["first-indicator"]} style={{backgroundColor: "#00C9C3"}}></div>
                <div className={styles["second-indicator"]} style={{backgroundColor: "#00C9C3"}}></div>
            </div>

            <div className={styles["insp-logo-frame"]}>
                {/*<Logo className={styles["insp-logo-frame-img"]}/>*/}
            </div>
        </div>
    )
}
