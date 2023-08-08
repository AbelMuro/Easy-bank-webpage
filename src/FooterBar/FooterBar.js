import React from 'react';
import styles from './styles.module.css';
import logo from './icons/logo.svg';

//this is where i left off, im almost done with the responsiveness of this component
function FooterBar() {
    return(
        <footer className={styles.container}>
            <div className={styles.content}>
                <img className={styles.logo} src={logo}/>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        About Us
                    </li>
                    <li className={styles.link}>
                        Contact
                    </li>
                    <li className={styles.link}>
                        Blog
                    </li>
                </ul>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        Careers
                    </li>
                    <li className={styles.link}>
                        Support
                    </li>
                    <li className={styles.link}>
                        Privacy Policy
                    </li>
                </ul>
                <button className={styles.invite}>
                    Request Invite
                </button>
                <ul className={styles.social_links}>
                    <li className={styles.social_link}></li>
                    <li className={styles.social_link}></li>
                    <li className={styles.social_link}></li>
                    <li className={styles.social_link}></li>
                    <li className={styles.social_link}></li>
                </ul>
                <small className={styles.copyright}>
                    &copy; Easybank.All Rights Reserved
                </small>
            </div>
        </footer>
    )
}

export default FooterBar
