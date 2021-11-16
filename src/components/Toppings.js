import React,{useContext,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {StateContext} from '../App';
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


function Toppings() {
    const obj=useContext(StateContext);
    const state=obj.state;
    const dispatch=obj.dispatch;

    const st=new Set();
    state.toppings.map(topping=>st.add(topping));

    const toppings=['mushrooms','peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

    const toppingAdder=(toppingSelected)=>{
        dispatch({type:'addTopping',payload:toppingSelected});
    }

    const toppingList=toppings.map(topping=>
    <motion.li key={topping}
        animate={{opacity:0.75}}
        whileHover={{ scale:1.2, originX:0, color:'#f8e112'}}
        transition={{type:'spring', stiffness:300}}
        className={st.has(topping) ? "p-2 cursor-pointer font-bold" : "p-2 cursor-pointer" } 
        onClick={()=>toppingAdder(topping)}>
        {st.has(topping) ? '>' : ''} {topping}
    </motion.li>
    )
    return (
        <motion.div 
        variants={containerVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        className="mx-auto w-1/3 my-16 p-8">

            <h2 className="text-lg font-bold border-b border-opacity-25 pb-1">Step 2: Choose Toppings</h2>
            <ul className="p-2">
                {toppingList}
            </ul>
            <motion.button 
            variants={buttonVariants}
            whileHover='hover'
              
            className="block rounded-full border my-4 mx-2 px-7 py-1.5 text-lg text-white text-opacity-75">
                <Link to='/order' className='no-underline text-white'>Order</Link>
            </motion.button>
            
        </motion.div>
    )
}

export default Toppings
