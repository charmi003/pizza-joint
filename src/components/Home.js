import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { StateContext } from '../App'
import Loader from './Loader'

const buttonVariants={
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

const containerVariants={
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        transition:{
            delay:1.5,
            duration:1.5
        }
    },
    exit:{
        x:-1000,
        transition:{
            ease:'easeInOut'
        }
    }
}

const Home=()=> {
    const obj=useContext(StateContext);
    const state=obj.state;
    const dispatch=obj.dispatch;

    useEffect(() => {
        dispatch({type:'reset'})
    }, [])

    return (
        <motion.div
        variants={containerVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        className="mx-auto w-1/2 text-center my-16 p-8">

            <h2 className="text-4xl font-weight-bold">Welcome to Pizza Joint</h2>
            
            <motion.button
            variants={buttonVariants}
            whileHover='hover'
            className="rounded-full border-2 mt-8 mb-9 px-10 py-2.5 text-lg text-white text-opacity-75">
                <Link to='/base' className='no-underline text-white text-opacity-50'>Create Your Pizza</Link>
            </motion.button>

            <div className="mx-auto w-1/2 text-center mt-10">
                <div className='mx-auto w-1/3 '>
                    <Loader/>
                </div>
            </div>

        </motion.div>
    )
}

export default Home;



//more the stiffness  -> more speedy

//yoyo:Infinity --> repeat an animation infinite no of times


//[] keyframes
//x:[-20,20,-40]..x transiitons -20 then 20 then -40..yoyo:Infinity will repeat this infinitely


//useCycle hook --> framer motion 
//toggle b/w aniamtions
//useCycle args ..aniamtions we want to cycle b/w..
//first one-->default one
//then whenever we call the cycleAniamtion fn, it will have the next val


//useCycle['an1','an2','an3','an4']
//default initial --> aniamtion='an1'
//cycleAniamtion --> aniamtion='an2'
//cycleAniamtion --> aniamtion='an3'
//cycleAniamtion --> aniamtion='an4'
//cycleAniamtion --> aniamtion='an1'
//cycle

//returns 2 things ..first variable (store the current aniamtion name) and a fn to cycle b/w the aniamtions