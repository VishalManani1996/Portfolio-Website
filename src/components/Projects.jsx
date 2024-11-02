import { FaGithub, FaGlobe } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl "
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3"
            >
              <img
                src={project?.image}
                className="mb-6 rounded w-[350px] h-[156px]"
                alt={project?.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/3"
            >
              <h6 className="mb-2 font-semibold">{project?.title}</h6>
              <p className="mb-4 text-neutral-400 ">{project?.description}</p>
              {project?.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded  px-2 py-1 bg-neutral-900 text-sm font-medium text-purple-500"
                >
                  {technology}
                </span>
              ))}
              <div className="flex flex-wrap gap-7 my-4">
                <a
                  // href="http://fruit-selling-vmm.netlify.app/"
                  href={project?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-center gap-3 border-slate-400 border-[1px] rounded-xl text-slate-400 py-2 px-2  ">
                    <div className="text-2xl">
                      <FaGlobe />
                    </div>
                    <div className="text-sm">Check live website</div>
                  </div>
                </a>
                <a
                  // href="https://github.com/VishalManani1996/Fresh-Fruit-Store"
                  href={project?.source_code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-center gap-3 border-slate-400 border-[1px] rounded-xl text-slate-400 py-2 px-2 text-sm ">
                    <div className="text-2xl">
                      <FaGithub />
                    </div>
                    <div className="text-sm">Source Code</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
