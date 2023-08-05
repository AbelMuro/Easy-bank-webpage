import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import styles from './styles.module.css';
import useMediaQuery from '../Hooks/useMediaQuery';
import images from './images';


//this is where i left off, i will need to fix the exit animation for the background image element

function Header() {
    const mobile = useMediaQuery('(max-width: 670px)')

    const variantsHeader = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.4
            }
        }
    }

    const variantsChildren = {
        hidden: {
            x: -100,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1
        }
    }

    return(
        <header className={styles.container}>
            <motion.section className={styles.header} 
                initial='hidden' 
                animate='show'
                variants={variantsHeader}
                transition={{
                    duration: 0.5
                }}>
                    <motion.h1 className={styles.title} variants={variantsChildren}>
                        Next generation digital banking
                    </motion.h1>
                    <motion.p className={styles.desc} variants={variantsChildren}>
                        Take your financial life online. 
                        Your Easybank account will be a one-stop-shop for spending, 
                        saving, budgeting, investing, and much more.
                    </motion.p>
                    <motion.button className={styles.invite} variants={variantsChildren}>
                        Request Invite
                    </motion.button>
            </motion.section>

            <motion.img 
                className={styles.phone} 
                src={images['phones']}
                initial={{y: -600, opacity: 0}} 
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.7}}/>                
            <AnimatePresence mode='wait'>
                <motion.img 
                    className={styles.backgroundImage} 
                    src={images[mobile ? 'backgroundImageMobile' : 'backgroundImage']}
                    initial={{x: 400, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{opacity: 0, y: 100, transition: {duration: 0.2}}}
                    transition={{duration: 1.3}}/>                
            </AnimatePresence>

        </header>
    )
}

export default Header;