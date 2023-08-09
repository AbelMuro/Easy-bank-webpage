import React from 'react';
import {motion} from 'framer-motion';
import styles from './styles.module.css';

function RequestButton() {

    const variantParents = {
        hidden: {y: -100, opacity: 0},
        show: {y: 0, opacity: 1, transition: {delay: 1.5}},
        hover: {
            scale: 1.2,
            transition: {scale: {type: 'spring', stiffness: 400, damping: 4}}
        }
    }

    const variantChildren = {
        hidden: {y: -100, opacity: 0},
        show: {y: 0, opacity: 1, transition: {delay: 1.5}},
        hover: {
            opacity: 0.4,
        }
    }

    return(
        <motion.div 
            className={styles.container} 
            initial={'hidden'} 
            whileInView={'show'} 
            whileHover='hover' 
            viewport={{once: true, amount: 0.3}}
            variants={variantParents}>
                <motion.button 
                    className={styles.invite} 
                    whileHover='hover'
                    viewport={{once: true, amount: 0.3}}
                    variants={variantChildren}>
                        Request Invite
                </motion.button>            
        </motion.div>

    )
}

export default RequestButton;