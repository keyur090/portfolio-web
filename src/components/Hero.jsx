
import { motion } from "framer-motion";
import styles from "../style";
import { discount, headerImg } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <motion.div
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Hello There! </span> I'm{" "}
            <span className="text-white"> Keyur</span> Vaghasiya
          </p>
        </motion.div>

        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1
            className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Frontend <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Developer</span>{" "}
          </motion.h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <motion.p
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          "A passionate Frontend Developer! I create stunning, user-friendly
          websites that bring ideas to life. Whether it’s responsive designs,
          sleek animations, or intuitive interfaces, I turn visions into reality.
          Let's build something amazing together!"
        </motion.p>
      </div>

      <motion.div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={headerImg}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] rounded-full border-b-2 border-t-2 border-cyan-400"
        />

        <motion.div
          className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
