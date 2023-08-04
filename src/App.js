import React, {useState, useEffect} from 'react';
import {motion, LayoutGroup} from 'framer-motion';
import './styles.css';


function App() {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    setIsSelected(!isSelected);
  }

  return (
    <div className={'container'}>
         <motion.div className={'box'} initial={{opacity: 0, x: 0}} animate={{opacity: 1, x: 100}} 
         transition={{type:'spring', bounce: 0.67, damping: 10}}/>
    </div>

  )
}
    

export default App;