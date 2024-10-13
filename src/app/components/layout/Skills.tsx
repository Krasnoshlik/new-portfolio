import { motion } from 'framer-motion';
import React from 'react';

type SkillsType = {
  name: string;
  children?: {
    name: string;
    children?: {
      name: string;
    }[];
  }[];
};

const skills: SkillsType = {
  name: 'Skills',
  children: [
    {
      name: 'Languages',
      children: [
        { name: 'TypeScript*' },
        { name: 'JavaScript' }
      ]
    },
    {
      name: 'React Ecosystem',
      children: [
        { name: 'Redux' },
        { name: 'React Router' },
        { name: 'React Forms' }
      ]
    },
    {
      name: 'Development Tools',
      children: [
        { name: 'VSCode' },
        { name: 'Git/Github' },
        { name: 'Figma' }
      ]
    },
    {
      name: 'Frameworks',
      children: [
        { name: 'React' },
        { name: 'Next.js' }
      ]
    },
    {
      name: 'Frontend Technologies',
      children: [
        { name: 'HTML/CSS' },
        { name: 'SCSS' },
        { name: 'Tailwind' }
      ]
    },
    {
      name: 'Backend & APIs',
      children: [
        { name: 'Clerk' },
        { name: 'Firebase' },
        { name: 'REST API' },
        { name: 'Axios' }
      ]
    }
  ]
};

const TreeNode = ({ node, level = 0 }: { node: SkillsType; level: number }) => {
  const isRoot = level === 0;
  const hasChildren = node.children && node.children.length > 0;

  return (
    <motion.div
      className={`flex flex-col ${isRoot ? 'items-center' : 'items-start'} mb-4`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: level * 0.1 }}
    >
      <div className={`flex items-center ${isRoot ? 'mb-8' : 'mb-2'}`}>
        <motion.div
          className='ml-2 w-5 h-[0.5px] rounded-full bg-[#EAC286]'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: level * 0.1 + 0.2 }}
        />
        <motion.div
          className={`ml-2 ${isRoot ? 'text-2xl font-bold ' : 'text-lg font-semibold '}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: level * 0.1 + 0.3 }}
        >
          {node.name}
        </motion.div>
      </div>
      {hasChildren && (
        <div className={`pl-6 ${isRoot ? 'flex flex-wrap justify-center gap-x-8' : ''}`}>
          {node.children?.map((child) => (
            <div key={child.name} className='flex-1 min-w-[200px]'>
              <motion.div
                className="w-px h-8 bg-[#EAC286] ml-2"
                initial={{ height: 0 }}
                animate={{ height: 22 }}
                transition={{ duration: 0.3, delay: (level + 1) * 0.1 }}
              />
              <TreeNode node={child} level={level + 1} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section className="max-w-4xl m-auto h-full flex flex-col justify-center px-2 pt-20">
      <div className=' hidden sm:block'>
        <TreeNode node={skills} level={0} />
      </div>
      <div className=' flex flex-wrap justify-center gap-10 sm:hidden'>
        {
          skills.children?.map((e,i) => {
            return (
              <div key={i} className=" flex flex-col gap-5">
                <h2 className=' text-[#EAC286] text-xl'>{e.name}:</h2>
                <div className=' flex flex-col gap-2 mt-auto'>
                  {
                    e.children?.map((e,i) => {
                      return (
                        <p key={i}>
                          {e.name}
                        </p>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

