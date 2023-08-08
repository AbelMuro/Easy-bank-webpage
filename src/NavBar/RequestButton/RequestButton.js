import React from 'react';
import styles from './styles.module.css';
import {motion, useCycle} from 'framer-motion';

function RequestButton({variantChildren}){
    const [animate, cycle] = useCycle({opacity: 1, scale: 1}, {opacity: 0.4, scale: 1.1});

    return(                        
    <motion.button 
        className={styles.invite}
        animate={animate}
        onHoverStart={() => cycle()}
        onHoverEnd={() => cycle()}
        variants={variantChildren}>
            Request Invite
    </motion.button>)
}

export default RequestButton;