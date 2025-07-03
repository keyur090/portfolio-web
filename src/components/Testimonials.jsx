import { motion } from "framer-motion";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <motion.div
      className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <motion.h2
        className={styles.heading2}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Let's make something <br className="sm:block hidden" /> amazing
        together.
      </motion.h2>

      <div className="w-full md:mt-0 mt-6">
        <motion.p
          className={`${styles.paragraph} text-center text-2xl max-w-[450px]`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          Start by{" "}
          <a
            href="mailto:vaghasiyakeyur825@gmail.com"
            className="text-cyan-500 border-b-2 border-cyan-500"
          >
            {" "}
            sending a message{" "}
          </a>
        </motion.p>
      </div>
    </div>

    <motion.div
      className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
    >
      {feedback.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
        >
          <FeedbackCard {...card} />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Testimonials;
