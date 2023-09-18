import React from 'react';
import logo from '../logos/logo.svg';
import MenuIcon from './MenuIcon';
import styles from './styles.module.css';
import {motion} from 'framer-motion';


function MobileNavBar() {

    const variants = {
        hidden: {
            y: -150, 
        },
        show: {
            y: 0, 
            transition: {duration: 0.4}
        } 
    }

    return(
            <motion.div 
                className={styles.container} 
                initial={'hidden'} 
                animate={'show'}
                transition={{staggerChildren: 0.4}}>
                    <nav className={styles.content}>
                        <motion.img className={styles.logo} src={logo} variants={variants}/>
                        <MenuIcon variants={variants}/>
                    </nav>            
            </motion.div>        
    )
}

export default MobileNavBar;