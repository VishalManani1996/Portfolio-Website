// import aboutImg from "../assets/about.jpg";
import aboutImg from "../assets/aboutPic.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl ">
        About <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 "
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 py-6 max-w-xl">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
