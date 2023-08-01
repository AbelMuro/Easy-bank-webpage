import React from 'react';
import {motion} from 'framer-motion';
import './styles.css';



function App() {


    return(
        <motion.div className={'circle'} initial={{opacity: 0, backgroundColor: 'green'}} whileInView={{opacity: 1, backgroundColor: 'white'}} />  

    )
}

export default App;