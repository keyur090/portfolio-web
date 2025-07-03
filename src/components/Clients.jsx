import { motion } from "framer-motion";
import styles from "../style";
import { experience } from "../constants";
import { BsPatchCheckFill } from "react-icons/bs";

const Clients = () => (
  <section
    id="skills"
    className="my-10 border border-gray-600 text-white rounded-xl p-8 mx-auto max-w-5xl"
  >
    <div className="mb-8 text-center">
      <motion.h1
        className={`${styles.heading2} border-b border-gray-600 pb-2`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Skills
      </motion.h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
      {experience.map((exp, index) =>
        exp.data.map((list, idx) => (
          <motion.div
            key={`${index}-${idx}`}
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 * idx }}
          >
            <BsPatchCheckFill className="text-[#7fcdec] text-xl" />
            <div>
              <h3 className="font-semibold text-lg">{list.skill}</h3>
              <p className="text-gray-400">{list.level}</p>
            </div>
          </motion.div>
        ))
      )}
    </div>
  </section>
);

export default Clients;
