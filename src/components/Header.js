import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'


const svgVariants={
    from:{
        rotate:-180,
    },
    to:{
        rotate:0,
        transition:{
            duration:1,
            ease:'easeInOut'
        }
    }
}

const pathVariants={
    from:{
        opacity:0,
        pathLength:0
    },
    to:{
        opacity:1,
        pathLength:1,
        transition:{
            duration:2,
            ease:'easeInOut'
        }
    }
}

const Header=()=> {
    return (
        <header className="px-4 py-6 flex items-center">

            <div className='logo'>
                <Link to='/'>

                    <motion.svg
                    drag dragConstraints={{left:0, top:0, right:0, bottom:0}} dragElastic={0.9}
                    variants={svgVariants}
                    initial='from'
                    animate='to'
                    className="pizza-svg" xmlns='http://www.w3.org/2000/svg' viewBox="0 0 100 100">

                        <motion.path
                        variants={pathVariants}
                        fill="none" stroke="white" strokeWidth="4" d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0 Z">
                        </motion.path>

                        <motion.path
                        variants={pathVariants}
                        fill="none" stroke="white" strokeWidth="4" d="M50 30 L53 -1 C50 -1 100 -1 90 26 Z">
                        </motion.path>

                    </motion.svg>

                </Link>
            </div>

            <motion.div
            transition={{delay:0.2, type:"spring" , stiffness:120}}
            initial={{y:-250}}
            animate={{y:-5}}
            className="title border-b border-opacity-25 pb-1.5 text-lg">
                <span>Pizza Joint</span>
            </motion.div>

        </header>
    )
}

export default Header


//initial -->animate from (start point)
//animate -->animate to (end point)



//adding the drag prop...the element becomes draggable
//drag constraints --> top:0,right:0,left:0, bottom:0...it should come back at this pos..now it becomes difficult to drag...
//like a spring..as soon as you leave the mouse..it will be back to its pos
//dragElastic --> controls the elasticity of the drag..higher the number , more difficult it is to drag