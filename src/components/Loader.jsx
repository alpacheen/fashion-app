import React from 'react'
import { Container } from '../styles/loader';
import { motion } from 'framer-motion';

const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
  
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  const textVariants = {
    hidden: {
      opacity: 0,
      
    },
    visible: {
      opacity: 1,
      
  
      transition: {
        duration: 2,
        delay: 1.5,
        ease: "easeInOut",
      },
    },
  };

const Loader = () => {
  return (
    <Container
    initial={{
        y:0, opacity: 1
    }}
    exit={{
        y: "100%",
        opacity: 0,
        transition: {
          duration: 2,
        },
      }}
    
    >
        <svg
          className="w-[6rem] h-auto overflow-visible"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g stroke="#faebd7">
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </g>
        </svg>
        <motion.span
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl text-[#faebd7] font-[Sirin]"
        >
          Vibe Studios
        </motion.span>
    </Container>
  )
}

export default Loader