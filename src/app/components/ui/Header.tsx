import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onNavClick: (index: number) => void;
  activeIndex: number;
}

export default function Header({ onNavClick, activeIndex }: HeaderProps) {
  const buttonVariants = {
    selected: {
      scale: 1.1,
      color: '#EAC286',
      transition: { type: 'spring', stiffness: 300 },
    },
    notSelected: {
      scale: 1, 
      color: '#fff', 
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  return (
    <header className="fixed top-0 w-full m-auto z-50 bg-[#141516] p-6 flex justify-center gap-6 border-b-[0.2px] border-[#eac28639] shadow-lg text-md">
      <motion.button
        onClick={() => onNavClick(0)}
        variants={buttonVariants}
        animate={activeIndex === 0 ? 'selected' : 'notSelected'} 
      >
        HOME
      </motion.button>

      <motion.button
        onClick={() => onNavClick(1)}
        variants={buttonVariants}
        animate={activeIndex === 1 ? 'selected' : 'notSelected'}
      >
        SKILLS
      </motion.button>

      <motion.button
        onClick={() => onNavClick(2)}
        variants={buttonVariants}
        animate={activeIndex === 2 ? 'selected' : 'notSelected'}
      >
        PROJECTS
      </motion.button>

      <motion.button
        onClick={() => onNavClick(3)}
        variants={buttonVariants}
        animate={activeIndex === 3 ? 'selected' : 'notSelected'}
      >
        CONTACT
      </motion.button>
    </header>
  );
}
