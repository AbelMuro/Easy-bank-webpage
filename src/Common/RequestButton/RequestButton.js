import React from 'react';
import styles from './styles.module.css';
import {motion, useCycle} from 'framer-motion';

function RequestButton({variants}){
    const [animate, cycle] = useCycle(
        {opacity: 1}, 
        {opacity: 0.4}
    );


    return(   
            <motion.button 
                className={styles.invite}
                animate={animate}
                whileHover={{scale: 1.2}}
                onHoverStart={() => cycle()}
                onHoverEnd={() => cycle()}
                transition={{scale: {type: 'spring', stiffness: 400, damping: 4 }}}
                variants={variants}>
                    Request Invite
            </motion.button>
            
    )
}

export default RequestButton;