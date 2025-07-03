import { motion } from "framer-motion";
import { BgRemoverImg } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <motion.img
        src={BgRemoverImg}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] bg-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </div>

    <div className={layout.sectionInfo}>
      <motion.h2
        className={styles.heading2}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Easily Remove Image Background
      </motion.h2>
      <motion.p
        className={`${styles.paragraph} max-w-[470px] mt-5`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        A background remover powerful image processing tool that allows users to
        easily remove backgrounds, set new backgrounds, blur images, and apply
        various enhancements—all in a seamless.
      </motion.p>
      <motion.a
        href="https://bg-remover-dashboard.vercel.app/"
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
  </section>
);

export default Billing;
