import React from 'react';
import logo from '../logos/logo.svg';
import MenuIcon from './MenuIcon';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

//i need to do some refactoring here
function MobileNavBar() {

    const variants = {
        hidden: {
            y: -150, 
            opacity: 0
        },
        show: {
            y: 0, 
            opacity: 1,
            transition: {duration: 0.4}
        } 
    }

    return(
            <motion.div 
                className={styles.container} 
                initial={{y: -100, opacity: 0}} 
                animate={{y: 0, opacity: 1, transition: {duration: 0.4}}}>
                    <nav className={styles.content}>
                        <img className={styles.logo} src={logo}/>
                        <MenuIcon/>
                    </nav>            
            </motion.div>        
    )
}

export default MobileNavBar;