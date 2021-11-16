import React,{useContext,useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {StateContext} from '../App';
import {motion,AnimatePresence} from 'framer-motion'
import ModalComp from './ModalComp';



const containerVariants={
    initial:{
        opacity:0,
        x:1020
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            type:'spring',
            mass:0.5,
            damping:7,
            when:'beforeChildren',
            staggerChildren:0.6
        }
    },
    exit:{
        x:-1000,
        transition:{
            ease:'easeInOut'
        }
    }
}

const childVariants={
    initial:{
        opacity:0
    },
    animate:{
        opacity:1
    }
}

function Order() {
    const obj=useContext(StateContext);
    const state=obj.state;
    const dispatch=obj.dispatch;

    //modal
    const [callModal, setCallModal] = useState(false);
    useEffect(() => {

        const modalTimoutId=setTimeout(()=>{setCallModal(true)},4000);
        return ()=>{
            clearTimeout(modalTimoutId);
        }
    }, [setCallModal])


    const toppingsList=state.toppings.map(topping=><li key={topping}>{topping}</li>)

    if(!state.base)
        return (
        <>
            <h5 className='text-center py-2'>No Orders</h5>
            <Link to='/' className='no-underline text-white'><p className="text-center py-2 underline">Back to Home</p></Link>
        </>
        )

    return (
        <motion.div className='backdrop-filter backdrop-sepia'
        variants={containerVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        className="mx-auto w-1/3 my-16 p-8 text-center">

            {callModal ? <ModalComp setCallModal={setCallModal} /> :
                <div>
                    <p className="text-2xl p-2 mb-2 font-bold">Thank You for your order :)</p> 
            
                    <motion.p
                    variants={childVariants}
                    className="text-md text-white text-opacity-50 mb-2 font-medium">You ordered a {state.base} pizza with:</motion.p>
        
                    <motion.ul
                    variants={childVariants}
                    className="p-2 text-white text-opacity-50 font-medium">
                        {toppingsList}
                    </motion.ul>
                </div>
            }
           
        </motion.div>
    )
}

export default Order


//children -->fade in aniamtion that will happen very quickly and won't be visivble as the parent animation of sliding from the right would take  more time
//solns:- delay or transition orchestration properties
//when:'beforeChildren' --> first complete this and then start animation for children


//container div variants,initial,animate..but child div .only variant
//bcoz names initial and animate in the outer objects same ..propation takes takes


//spring
//less the mass, more quick
//damping force..more the damping force,more quickly it will stop

//staggerChildren --> staggers the animation of the children by 0.4s


//to animate things off the screen --> AnimatePresence
//useEffect, false -->  h2--> removed from the dom..to animate this h2, AnimatePresence...
//exit ..just like we had initial,animate..
//exit meaning animate to



//backdrop..to emphasize the modal..background dark