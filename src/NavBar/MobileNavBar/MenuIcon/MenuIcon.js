import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

const Path = props => (
    <motion.path
      fill="transparent"
      className={styles.line}
      strokeWidth="1.5"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );


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
                <motion.svg className={styles.menuIcon} width="23" height="23" viewBox="0 0 23 23" initial={false} animate={open ? 'open' : 'closed'}>
                    <Path
                        variants={{
                        closed: { d: "M 2 2.5 L 25 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                        }}
                        transition={{duration: 0.2}}
                    />
                    <Path
                        d="M 2 9.423 L 25 9.423"
                        variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.2}}
                    />
                    <Path
                        variants={{
                        closed: { d: "M 2 16.346 L 25 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                        }}
                        transition={{duration: 0.2}}
                    />
                </motion.svg>
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