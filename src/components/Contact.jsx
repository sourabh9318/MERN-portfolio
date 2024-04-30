import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion";



const itemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 className='my-10 text-center text-4xl underline'
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:100}}
        transition={{duration:0.5}}>Get in touch</motion.h1>

          <div className="text-center tracking-tighter">
              <p className='my-4'  variants={itemVariants}>{CONTACT.address}</p>
              <p className='MY-4'  variants={itemVariants}>{CONTACT.phoneNo}</p>
              <a className='border-b' href='#'  variants={itemVariants} >{CONTACT.email}</a>
          </div>
        </div>
  )
}

export default Contact