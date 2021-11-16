import React from 'react'
import {motion,useCycle}from 'framer-motion'

const loaderStyles={
    width:'10px',
    height:'10px',
    backgroundColor:'rgba(255,255,255,0.9)',
    borderRadius:'50%'
}

const loaderVariants={
    initial:{
        opacity:0
    },
    animationOne:{
        opacity:1,
        x:[-20,20],
        y:[0,-30],
        transition:{
            delay:1.5,
            duration:1.5,
           x:{
               yoyo:Infinity,
               duration:0.5
           },
           y:{
               yoyo:Infinity,
               duration:0.25,
               ease:'easeOut'
           }
        }
    },

    
    animationTwo:{
        opacity:1,
        x:0,
        y:[0,-40],
        transition:{
            delay:1.5,
            duration:1.5,
            y:{
                yoyo:Infinity,
                duration:0.35,
                ease:'easeOut'
            }
        }
    }
}

function Loader() {
    const [animation,cycleAnimation]=useCycle("animationOne",'animationTwo');
    return (
        <>
        <motion.div style={loaderStyles} variants={loaderVariants} initial='initial' animate={animation} className='mx-auto' >
        </motion.div>
        <button onClick={()=>cycleAnimation()} className='mt-3 text-white text-opacity-75'>Change Loader</button>
        </>
    )
}

export default Loader
