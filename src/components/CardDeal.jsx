import { motion } from "framer-motion";
import { weather } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <motion.h2
        className={styles.heading2}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Find a weather <br className="sm:block hidden" /> in one click.
      </motion.h2>

      <motion.p
        className={`${styles.paragraph} max-w-[470px] mt-5`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        It features a responsive UI displaying current conditions, forecasts,
        and temperatures with intuitive search and location functionality.
      </motion.p>
      <motion.a
        href="https://weather-app-black-one-48.vercel.app/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <button
          type="button"
          className={`py-2 px-4 mt-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        >
          Live Demo
        </button>
      </motion.a>
    </div>

    <div className={layout.sectionImg}>
      <motion.img
        src={weather}
        alt="billing"
        className="w-[100%] h-[100%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </div>
  </section>
);

export default CardDeal;
