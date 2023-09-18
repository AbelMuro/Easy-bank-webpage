import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

function MenuIcon({variants}){
    const [open, setOpen] = useState(false);
    const overlayRef = useRef();
    const dialogRef = useRef();

    const handleToggle = () => {
        setOpen(!open);
    }

    useEffect(() => {
        if(open){
            overlayRef.current.style.display = 'block';
            setTimeout(() => {
                if(!overlayRef.current || !dialogRef.current) return;
                overlayRef.current.style.opacity = 1;
                dialogRef.current.style.transform = 'scale(1)';
            }, 10)
        }
        else{
            overlayRef.current.style.opacity = 0;
            dialogRef.current.style.transform = '';
            setTimeout(() => {
                if(!overlayRef.current) return;
                overlayRef.current.style.display = '';
            }, 200)
        }
    }, [open])

    return(
        <>
            <motion.button className={styles.button} onClick={handleToggle} variants={variants}>
                <svg width="24" height={'24'} className={styles.svg_container}>
                    <rect
                        className={styles.rect}
                        x={open ? '0.868164' : '0'}
                        y={open ? '0.661133' : '0'}
                        width="24" 
                        height="1" 
                        fill="#2D314D"
                        transform={open ? 'rotate(45 0.868164 0.661133)' : ''}
                    />
                    <rect
                        className={styles.rect}
                        y="5" 
                        width="24" 
                        height="1" 
                        fill="#2D314D"
                        opacity={open ? 0 : 1}
                    />
                    <rect
                        className={styles.rect}
                        x={open ? "0.161133" : '0'}
                        y={open ? "17.6317" : '10'} 
                        width="24" 
                        height="1" 
                        transform={open ? 'rotate(-45 0.161133 17.6317)' : ''}
                        fill="#2D314D"
                    />
                </svg>
            </motion.button>   
            <div className={styles.overlay} ref={overlayRef}>
                <dialog className={styles.dialog} ref={dialogRef}>
                    <ul className={styles.links}>
                        <li className={styles.link}>
                            Home
                        </li>
                        <li className={styles.link}>
                            About
                        </li>
                        <li className={styles.link}>
                           Contact
                        </li>
                        <li className={styles.link}>
                            Blog
                        </li>
                        <li className={styles.link}>
                            Careers
                        </li>
                    </ul>
                </dialog>                   
            </div>
  
        </>

    )
}

export default MenuIcon;