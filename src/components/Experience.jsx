import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl "
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400 ">
                {experience?.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience?.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience?.company}
                </span>
              </h6>
              {/* {experience?.description?.map((item, index) => (
                <p className="mb-4 text-neutral-400 ">
                  <ul>
                    <li key={index}>{item}</li>
                  </ul>
                </p>
              ))} */}
              {experience?.description?.map((item, index) => (
                <ul key={index} className="list-disc mb-4 ml-4 text-neutral-400">
                  <li>{item}</li>
                </ul>
              ))}
              {experience?.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded  px-2 py-1 bg-neutral-900 text-sm font-medium text-purple-500"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;