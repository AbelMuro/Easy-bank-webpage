import React from 'react';
import details from './Data';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import icons from './icons';

function CompanyDetails() {

    const variantParent = {
        hidden: {},
        show: {
            transition: {
                type: 'tween',
                duration: 0.4,
                staggerChildren: 0.3,
            }
        }
    }

    const variantChildren = {
        hidden: {
            opacity: 0,
            x: 200,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'tween',
                duration: 0.4,
                staggerChildren: 0.3,
            }
        }
    }

    return(
        <section className={styles.container} >
            <motion.div 
                className={styles.content} 
                initial='hidden'
                whileInView='show'
                viewport={{
                    once: true,
                    margin: '100px',
                    amount: 0.8
                }}
                variants={variantParent}>
                <motion.h1 className={styles.title} variants={variantChildren}>
                    Why choose Easybank?
                </motion.h1>
                <motion.p className={styles.desc} variants={variantChildren}>
                    We leverage Open Banking to turn your bank account into your financial hub. 
                    Control your finances like never before.
                </motion.p>
                {
                    details.map((detail, i) => {
                        return(
                            <motion.div className={styles.detail} key={i} variants={variantChildren} >
                                <motion.img src={icons[detail.icon]} className={styles.icon} variants={variantChildren}/>                                
                                <motion.h2 className={styles.detail_title} variants={variantChildren}>
                                    {detail.title}
                                </motion.h2>
                                <motion.p className={styles.detail_desc} variants={variantChildren}>
                                    {detail.desc}
                                </motion.p>
                            </motion.div>
                        )
                    })
                }                
            </motion.div>

        </section>
    )
}

export default CompanyDetails;