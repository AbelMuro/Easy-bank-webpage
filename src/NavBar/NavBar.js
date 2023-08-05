import React, {useState} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion'
import logo from './logos/logo.svg';

function NavBar() {
    const [linkHover, setLinkHover] = useState('');


    const initialLine = {
        opacity: 0
    } 

    const animateLine = {
        opacity: 1
    }

    const transitionLine = {
        type: 'tween',
        duration: 0.4
    }

    const handleMouseEnter = (e) => {
        if(!e.target.matches('.' + styles.link)) return;

        const linkId = e.target.getAttribute('data-id');
        console.log(e.target);
        setLinkHover(linkId);
    }

    const handleMouseLeave = () => {
        setLinkHover('');
    }

    return(
        <motion.nav className={styles.container}
            initial={{y: -70, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.9}}
        >
            <div className={styles.content}>
                <img src={logo} className={styles.logo}/>
                <ul className={styles.links} onMouseLeave={handleMouseLeave}>
                    <li className={styles.link} data-id={1} onMouseEnter={handleMouseEnter}>
                        Home
                        {linkHover === '1' && 
                            <motion.div 
                                className={styles.underline} 
                                layoutId='line' 
                                initial={initialLine}
                                animate={animateLine}
                                transition={transitionLine}/>}
                    </li>
                    <li className={styles.link} data-id={2} onMouseEnter={handleMouseEnter}>
                        About
                        {linkHover === '2' && 
                            <motion.div 
                                className={styles.underline} 
                                layoutId='line' 
                                initial={initialLine}
                                animate={animateLine}
                                transition={transitionLine}/>}
                    </li>
                    <li className={styles.link} data-id={3} onMouseEnter={handleMouseEnter}>
                        Contact
                        {linkHover === '3' && 
                            <motion.div 
                                className={styles.underline} 
                                layoutId='line' 
                                initial={initialLine}
                                animate={animateLine}
                                transition={transitionLine}/>}
                    </li>
                    <li className={styles.link} data-id={4} onMouseEnter={handleMouseEnter}>
                        Blog
                        {linkHover === '4' && 
                            <motion.div 
                                className={styles.underline} 
                                layoutId='line' 
                                initial={initialLine}
                                animate={animateLine}
                                transition={transitionLine}/>}
                    </li>
                    <li className={styles.link} data-id={5} onMouseEnter={handleMouseEnter}>
                        Careers
                        {linkHover === '5' && 
                            <motion.div 
                                className={styles.underline} 
                                layoutId='line' 
                                initial={initialLine}
                                animate={animateLine}
                                transition={transitionLine}/>}
                    </li>
                </ul>
                <button className={styles.invite}>
                    Request Invite
                </button>
            </div>
        </motion.nav>
    )
}

export default NavBar;