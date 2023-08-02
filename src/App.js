import React, {useState, useEffect} from 'react';
import {motion, useMotionValue, useTransform, useAnimate} from 'framer-motion';
import './styles.css';

function App() {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));
    const [,animate] = useAnimate();
    
    useEffect(() => {
      const controls = animate(count, 100)
    
      return controls.stop
    }, [])
    
    return <motion.div>
            {rounded}
        </motion.div>
  
}

export default App;