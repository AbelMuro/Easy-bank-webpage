import React from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import articles from './Data';
import images from './images';


//this is where i leftoff, i wll need to fix the bug with the Header component
//and i also need to finish the animation for the article boxes below
function LatestArticles() {
    const variantParent = {
        hidden: {
            transition: {
                staggerChildren: 0.3
            }
        },
        show: {}
    }


    return(
        <motion.section className={styles.container}>
            <motion.h1 className={styles.title} >
                    Latest Articles
            </motion.h1>
            {
                articles.map((article, i) => {
                    return(
                        <motion.div className={styles.article} key={i}>
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