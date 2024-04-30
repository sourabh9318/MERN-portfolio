import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 top-0 -z-10 h-full w-full text-center text-4xl underline">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
         
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}  // Ensures animation only plays once
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>

        <motion.div className="w-full lg:w-1/2"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}  // Ensures animation only plays once
        transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex justify-center lg:justify-start">
            <p className="about-text my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
