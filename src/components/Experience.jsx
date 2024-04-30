import React from 'react'
import { EXPERIENCES } from '../constants'
import { animate, motion } from "framer-motion";

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>

        <motion.h1 className='my-2 text-center text-4xl py-11 font-thin mt-20 underline'
         initial={{ y: 0, opacity: 0 }}
         whileInView={{ y: -100, opacity: 1 }}
         viewport={{ once: false }}  // Ensures animation only plays once
         transition={{ duration: 1, delay: 0.2 }}
         >Experience</motion.h1>

        <div className="experiance">
            {EXPERIENCES.map((experience,index)=>
       ( <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>

        <motion.div className="w-full lg:w-1/4 text-2xl"
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         viewport={{ once: false }}  // Ensures animation only plays once
         transition={{ duration: 1, delay: 0.2 }}
        >
        <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
        </motion.div>

        <motion.div className="w-full max-w-xl lg:w-3/4 text-2xl"
         initial={{ x: 100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         viewport={{ once: false }}  // Ensures animation only plays once
         transition={{ duration: 1, delay: 0.2 }}
        >
            <h6 className='mb-2 font-semibold'>
                {experience.role}
                <span className='text-sm text-purple-100 '>{experience.company}</span>
            </h6>
            <p className='mb-4 text-neutral-400'>{experience.description}</p>
            {experience.technologies.map((tech, index)=>(
                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800' >{tech}</span>
            ))}
        </motion.div>
       </div>)
            )}
        </div>
    </div>
  )
}

export default Experience