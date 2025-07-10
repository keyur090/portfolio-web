import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { motion } from "framer-motion";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
    >
      <motion.div
        className="flex-[1] flex flex-col justify-start mr-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p
          className={`${
            (styles.paragraph, styles.heading2)
          } flex gap-8 items-center
          }`}
        >
          Contact Me
        </p>
      </motion.div>

      <motion.div
        className="flex-[1.5] w-full flex flex-row justify-end flex-wrap md:mt-0 mt-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {footerLinks.map((footerlink) => (
          <div
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            key={footerlink.id}
          >
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <motion.li
                  className={` border-gray-400 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite select-none`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  key={link.name}
                >
                  <h1 className="flex gap-3 p-3 ">
                    <img
                      width={30}
                      className=" rounded-full border bg-gray-400 border-gray-700"
                      src={link.icon}
                      alt=""
                    />
                    <span className="text-xl text-gray-400 text-center hover:text-white cursor-pointer">
                      {link.name}
                    </span>
                  </h1>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-neutral-400">
        Copyright © 2024 Keyur Vaghasiya. All Rights Reserved.
      </p>

      <motion.div
        className="flex flex-row md:mt-0 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {socialMedia.map((social, index) => (
          <motion.img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[25px] h-[25px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
          />
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Footer;
