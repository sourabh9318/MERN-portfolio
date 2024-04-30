
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { motion } from "framer-motion";


const iconVariants=(duration)=>({
    initial:{y: -10},

    hover: {
        scale: 1.1, // Scales up by 10%
        transition: {
          duration: 0.2, // Animation duration for the scaling effect
    },
},

    animate:{
        y:[10, -10],
        transition: {
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        },
    },
});



const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">

    <motion.h1 className="my-20 text-center text-4xl font-thin underline"
     initial={{ y: 100, opacity: 0 }}
     whileInView={{ y: 0, opacity: 1 }}
     viewport={{ once: false }}  // Ensures animation only plays once
     transition={{ duration: 1, delay: 0.2 }}

    >Technologies</motion.h1>

    <div className="flex flex-wrap items-center justify-center gap-4">

        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
         variants={iconVariants(1)}
         initial="initial"
         animate="animate"
         whileHover="hover"
        >
            <FaReact className="text-7xl text-cyan-400"></FaReact>
        </motion.div>

        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        whileHover="hover"
        >
            < FaNodeJs className="text-7xl text-yellow-400"></ FaNodeJs>
        </motion.div>

        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"
        whileHover="hover">
            <SiTailwindcss className="text-7xl text-cyan-400"></SiTailwindcss>
        </motion.div>

        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        whileHover="hover">
            <FaReact className="text-7xl text-cyan-400"></FaReact>
        </motion.div>

        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"
        whileHover="hover">
            <FaReact className="text-7xl text-cyan-400"></FaReact>
        </motion.div>

        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        whileHover="hover">
            <BiLogoMongodb className="text-7xl text--400"></BiLogoMongodb>
        </motion.div>
    
    </div>
    </div>
  )
}

export default Technologies


