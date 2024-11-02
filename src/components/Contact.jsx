import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          animate={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4 "
        >
          {CONTACT?.address}
        </motion.p>
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          animate={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4 "
        >
          {CONTACT?.phoneNo}
        </motion.p>
        {/* <motion.a href="#" className="border-b "> */}
        <motion.a href={`mailto:${CONTACT?.email}`} className="border-b ">
          {CONTACT?.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
