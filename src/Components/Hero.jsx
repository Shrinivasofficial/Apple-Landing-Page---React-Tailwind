import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const headingText = "Airpods Max".split(" ");

  return (
    <div className='relative flex flex-col items-center justify-center h-screen overflow-hidden mt-10'>
      
        {/* Animated Heading */}
        <h1 className='absolute text-[230px] bg-gradient-to-r from-black via-gray-300 to-white inline-block text-transparent bg-clip-text font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] whitespace-nowrap'>
          {headingText.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </h1>
       
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='z-10'
        >
          <img 
              src='https://www.apple.com/v/airpods/v/images/overview/airpods_max__f265q4g4ddym_large_2x.png' 
              className='h-[600px]' 
              alt='Airpods Max Pro'
          />
        </motion.div>
        
        {/* Text and Buttons */}
        <div className='relative z-20 text-center'>
            <p className='text-4xl font-semibold mt-7'>2nd Generation</p>
            <div className='flex flex-row space-x-4 justify-center'>
              {/* Animated Button for Price */}
              <motion.button
                className='px-8 py-2 mt-7 rounded-xl text-white bg-black border border-blue-500'
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              > 
                $200
              </motion.button>
              <button className='px-8 py-2 mt-7 font-medium underline text-black'> 
                Learn more
              </button>
            </div>
        </div>
    </div>
  );
}
