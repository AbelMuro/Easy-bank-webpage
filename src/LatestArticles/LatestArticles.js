import React from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import articles from './Data';
import images from './images';
import useMediaQuery from '../Hooks/useMediaQuery';

function LatestArticles() {
    const mobile = useMediaQuery('(max-width: 830px)')

    const variantParent = {
        hidden: {
        },
        show: {
            transition: {
                staggerChildren: 0.3
            }
        }
    }


    const variantChildren = {
        hidden: {
            opacity: 0,
            y: 100
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    }

    return(
        <motion.section 
            className={styles.container} 
            initial='hidden' 
            whileInView='show' 
            viewport={{once: true, amount: mobile ? 0.2 : 0.8}}
            variants={variantParent}>
                <motion.h1 className={styles.title} variants={variantChildren}>
                        Latest Articles
                </motion.h1>
            {
                articles.map((article, i) => {
                    return(
                        <motion.div className={styles.article} key={i} variants={variantChildren}>
                            <img src={images[article.image]} className={styles.article_image}/>
                            <p className={styles.article_author}>
                                {`By ${article.author}`}
                            </p>
                            <h2 className={styles.article_title}>
                                {article.title}
                            </h2>
                            <p className={styles.article_desc}>
                                {article.desc}
                            </p>
                        </motion.div>
                    )
                })
            }
        </motion.section>
    )
}

export default LatestArticles;