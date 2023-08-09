import React from 'react';
import styles from './styles.module.css';
import logo from './icons/logo.svg';
import RequestButton from './RequestButton';
import {motion} from 'framer-motion';

function FooterBar() {

    const variantParents = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const variantChildren = {
        hidden: {
            y: -100,
            opacity: 0,            
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    return(
        <footer className={styles.container}>
            <motion.div 
                className={styles.content} 
                initial='hidden' 
                whileInView='show' 
                viewport={{once: true, amount: 0.6}}
                variants={variantParents}>
                <motion.img className={styles.logo} src={logo} variants={variantChildren}/>
                <motion.ul className={styles.links} variants={variantChildren}>
                    <motion.li className={styles.link} variants={variantChildren}>
                        About Us
                    </motion.li>
                    <motion.li className={styles.link} variants={variantChildren}>
                        Contact
                    </motion.li>
                    <motion.li className={styles.link} variants={variantChildren}>
                        Blog
                    </motion.li>
                </motion.ul>
                <motion.ul className={styles.links} variants={variantChildren}>
                    <motion.li className={styles.link} variants={variantChildren}>
                        Careers
                    </motion.li>
                    <motion.li className={styles.link} variants={variantChildren}>
                        Support
                    </motion.li>
                    <motion.li className={styles.link} variants={variantChildren}>
                        Privacy Policy
                    </motion.li>
                </motion.ul>
                <RequestButton/>
                <motion.ul className={styles.social_links} variants={variantChildren}>
                    <motion.li className={styles.social_link} variants={variantChildren}></motion.li>
                    <motion.li className={styles.social_link} variants={variantChildren}></motion.li>
                    <motion.li className={styles.social_link} variants={variantChildren}></motion.li>
                    <motion.li className={styles.social_link} variants={variantChildren}></motion.li>
                    <motion.li className={styles.social_link} variants={variantChildren}></motion.li>
                </motion.ul>
                <motion.small className={styles.copyright} variants={variantChildren}>
                    &copy; Easybank.All Rights Reserved
                </motion.small>
            </motion.div>
        </footer>
    )
}

export default FooterBar
