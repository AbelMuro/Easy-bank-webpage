import React from 'react';
import {motion} from 'framer-motion';
import RequestButton from '../Common/RequestButton';
import styles from './styles.module.css';
import useMediaQuery from '../Hooks/useMediaQuery';
import images from './images';

function Header() {
    const mobile = useMediaQuery('(max-width: 670px)')

    const variantsChildren = {
        hidden: {
            y: -250,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1
        }
    }

    return(
        <>
            <header className={styles.container}>
                <motion.section className={styles.header} 
                    initial='hidden' 
                    animate='show'
                    transition={{staggerChildren: 0.6}}>
                        <motion.h1 className={styles.title} variants={variantsChildren}>
                            Next generation digital banking
                        </motion.h1>
                        <motion.p className={styles.desc} variants={variantsChildren}>
                            Take your financial life online. 
                            Your Easybank account will be a one-stop-shop for spending, 
                            saving, budgeting, investing, and much more.
                        </motion.p>
                        <RequestButton variants={variantsChildren}/> 
                </motion.section>
                <motion.img 
                    className={styles.phone} 
                    src={images['phones']}
                    initial={{y: -400, opacity: 0}} 
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 1.7}}/>                      
            </header>        
            <motion.img 
                    className={styles.backgroundImage} 
                    src={images[mobile ? 'backgroundImageMobile' : 'backgroundImage']}
                    initial={{x: 400, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1.3}}/>                
        </>

    )
}

export default Header;