import { motion } from "framer-motion";
import styles from "../style";

const CTA = () => (
  <motion.section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
    <motion.div
      className="flex-1 flex flex-col"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
    >
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
    </motion.div>

    <motion.div
      className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
    >
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Let's Connect
      </button>
    </motion.div>
  </motion.section>
);

export default CTA;
