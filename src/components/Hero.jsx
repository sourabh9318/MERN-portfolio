import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { animate, motion } from "framer-motion";


const container =(delay)=>({
    hidden:{x:-100, opacity: 0},
    visible:{
        x:0,
        opacity: 1,
        transition: {duration: 0.5, delay:delay}
    }
})
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            >
              <h1 className="pb-11 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl ">
                Sourabh Choudhary
              </h1>{" "}
            </motion.div>

            <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            > <span className="pl-36 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span></motion.div>


            <motion.div
            variants={container(1)}
            initial="hidden"
            animate="visible"
            > <p className=" hero-font my-2 max-w-xl py-6 font-light tracking-tighter text-fuchsia-100">
              {HERO_CONTENT}
            </p></motion.div>

            
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
          <motion.div
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:0.3}}
            >  <img className="" src={profilePic} alt="profile" /> </motion.div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
