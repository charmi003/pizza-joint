import React, { useContext,useState } from 'react'
import {Link} from 'react-router-dom'
import {StateContext} from '../App'
import {motion} from 'framer-motion'

const containerVariants={
    initial:{
        opacity:0,
        x:1020
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            delay:0.3,
            type:'spring',
            stiffness:120
        }
    },
    exit:{
        x:-1000,
        transition:{
            ease:'easeInOut'
        }
    }
}


const buttonVariants={
    initial:{
        x:-300
    },
    animate:{
        x:0,
        transition:{
            type: "spring", 
            stiffness: 120
        }
    },
    hover:{
        scale:1.1,
        textShadow:'0px 0px 8px rgba(255,255,255,0.63)',
        boxShadow:'0px 0px 8px rgba(255,255,255,0.63)',
        transition:{
            duration:0.4,
            yoyo:Infinity
        }
    }
}

function Base() {
   const obj=useContext(StateContext);
   const state=obj.state;
   const dispatch=obj.dispatch;


   const bases=['Classic','Thin & Crispy', 'Thick Crust'];

    const baseAdder=(baseSelected)=>{
        dispatch({type:'addBase', payload:baseSelected});
    }

    const baseList=bases.map(base=>
    <motion.li key={base}
        animate={{opacity:0.75}}
        whileHover={{scale:1.2, originX:0, color:'#f8e112'}}
        transition={{type:'spring', stiffness:300}}
        className={base==state.base? 'p-2 cursor-pointer font-bold' : 'p-2 cursor-pointer'} 
        onClick={()=>baseAdder(base)}>
        {base==state.base? '>' : ''} {base}
    </motion.li>
    )

    return (
        <motion.div 
        variants={containerVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        className="mx-auto w-1/3 my-16 p-8">
        
            <h2 className="text-lg font-bold border-b border-opacity-25 pb-1">Step 1: Choose Your Base</h2>
            <ul className="p-2">
                {baseList}
            </ul>

            { state.base ? 

            <motion.button
            variants={buttonVariants}
            initial='initial'
            animate='animate'
            whileHover='hover'
            className="block rounded-full border my-4 mx-2 px-7 py-1.5 text-white text-opacity-75">
                <Link to='/toppings' className='no-underline text-white'>Next</Link>
            </motion.button> : null }
            
        </motion.div>
    )
}

export default Base


//li --> scale
//default transform origin center
//skew towards the left
//to avoid this, originX=0.. (0,ycentre)..transform


//variants
//1). initial,animate and transition objects into 1 single outside object  --> This keepsour code cleaner
//2). they allow us to propagate variant changes through the DOM resulting in cleaner code too
//3). They allow us to create timing relationships b/w parent motions and children motions using transition orchestration properties
