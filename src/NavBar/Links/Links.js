import React, {useState} from 'react';
import {motion} from 'framer-motion';
import styles from './styles.module.css';

function Links() {
    const [linkHover, setLinkHover] = useState(null);

    const transitionLine = {
        type: 'spring',
        bounce: 0,
    }

    const variantLinks = {
        hidden: {y: -100, opacity: 0},
        show: {y: 0, opacity: 1}
    }
    
    const handleMouseEnter = (e) => {
        const linkId = e.target.getAttribute('data-id');
        setLinkHover(linkId);
    }

    const handleMouseLeave = () => {
        setLinkHover(null);
    }

    return (
        
        <ul className={styles.links} onMouseLeave={handleMouseLeave}>
            <motion.li 
                className={styles.link} 
                data-id={1} 
                onMouseEnter={handleMouseEnter}
                variants={variantLinks }>
                Home
                {linkHover === '1' ? 
                    <motion.div 
                        className={styles.underline} 
                        layoutId='underline' 
                        transition={transitionLine}/> : null}
            </motion.li>
            <motion.li 
                className={styles.link} 
                data-id={2} 
                onMouseEnter={handleMouseEnter}
                variants={variantLinks }>
                About
                {linkHover === '2' ? 
                    <motion.div 
                        className={styles.underline} 
                        layoutId='underline' 
                        transition={transitionLine}/> : null}
            </motion.li>
            <motion.li 
                className={styles.link} 
                data-id={3} 
                onMouseEnter={handleMouseEnter}
                variants={variantLinks }>
                Contact
                {linkHover === '3' ? 
                    <motion.div 
                        className={styles.underline} 
                        layoutId='underline' 
                        transition={transitionLine}/> : null}
            </motion.li>
            <motion.li 
                className={styles.link} 
                data-id={4} 
                onMouseEnter={handleMouseEnter}
                variants={variantLinks }>
                Blog
                {linkHover === '4' ?
                    <motion.div 
                        className={styles.underline} 
                        layoutId='underline' 
                        transition={transitionLine}/> : null}
            </motion.li>
            <motion.li 
                className={styles.link} 
                data-id={5} 
                onMouseEnter={handleMouseEnter}
                variants={variantLinks }>
                Careers
                {linkHover === '5' ? 
                    <motion.div 
                        className={styles.underline} 
                        layoutId='underline' 
                        transition={transitionLine}/> : null}
            </motion.li>
        </ul>
    )
}

export default Links;