'use client';

import { motion } from 'framer-motion';
import { useState } from 'react'; // Import useState
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
          <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
            METAVERSUS
          </h2>

          {/* Navigation Links for Desktop */}
          <ul className="hidden lg:flex gap-20 text-white text-lg font-bold mt-1 items-center justify-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          {/* Search Icon */}
          <img
            src="/search.svg"
            alt="search"
            className="w-[24px] h-[24px] object-contain"
          />

          {/* Menu Icon for Mobile */}
          <button onClick={toggleDropdown} className="lg:hidden text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black p-4"
          >
            <ul className="flex flex-col gap-4 text-white text-lg font-bold items-center">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
