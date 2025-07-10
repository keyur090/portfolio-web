import { motion } from "framer-motion";
import styles from "../style";

import { techSkills } from "../constants";

const Clients = () => (
  <section
    id="skills"
    className="my-10 border border-gray-600 text-white rounded-xl p-8 mx-auto max-w-4xl"
  >
    <div className="mb-8 text-center">
      <motion.h1
        className={`${styles.heading2} border-b border-gray-600 pb-2`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Tech Skills
      </motion.h1>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-16 place-items-center">
      {techSkills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
          <span className="text-sm font-medium">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Clients;
