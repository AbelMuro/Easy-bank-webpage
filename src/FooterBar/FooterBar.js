import React from 'react';
import styles from './styles.module.css';

function FooterBar() {
    return(
        <footer className={styles.container}>
            <div className={styles.content}>
                <img className={styles.logo} />
            </div>
        </footer>
    )
}

export default FooterBar
