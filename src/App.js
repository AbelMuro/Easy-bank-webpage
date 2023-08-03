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
        <div className={'box'}>
          {isSelected && <motion.div className={'lineOne'} layoutId="underline" />  } 
        </div>
        <div className={'box'}>
          {!isSelected && <motion.div className={'lineTwo'} layoutId="underline" />  }       
        </div>
        <button onClick={handleClick}>
          click me
        </button>
    </div>

  )
}
    

export default App;