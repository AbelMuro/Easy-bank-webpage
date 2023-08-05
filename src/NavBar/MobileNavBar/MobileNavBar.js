import React from 'react';
import logo from '../logos/logo.svg';
import MenuIcon from './MenuIcon';
import styles from './styles.module.css';

function MobileNavBar() {
    return(
        <nav className={styles.container}>
            <img className={styles.logo} src={logo}/>
            <MenuIcon/>
        </nav>
    )
}

export default MobileNavBar;