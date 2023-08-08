import React from 'react';
import RequestButton from '../Common/RequestButton';
import styles from './styles.module.css';
import Links from './Links';
import {motion} from 'framer-motion';
import MobileNavBar from './MobileNavBar';
import useMediaQuery from '../Hooks/useMediaQuery.js';
import logo from './logos/logo.svg';

function NavBar() {
    const mobile = useMediaQuery('(max-width: 670px)');

    const variantsNavBar = {
        hidden: {y: -70, opacity: 0},
        show: {
            y: 0, 
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2
            }
        }
    }

    const variantChildren = {
        hidden: {y: -100, opacity: 0},
        show: {y: 0, opacity: 1, transition: {duration: 0.4}},
    }

    return (
        <motion.nav className={styles.container}
            initial='hidden'
            animate='show'
            variants={variantsNavBar}
            transition={{duration: 0.9, delay: 0.2}}>
                {mobile ? <MobileNavBar/> : 
                    <div className={styles.content}>
                        <motion.img 
                            src={logo} 
                            className={styles.logo}
                            variants={variantChildren}/>
                        <Links/>
                        <RequestButton variants={variantChildren}/>
                    </div>}
        </motion.nav>)
    
}

export default NavBar;