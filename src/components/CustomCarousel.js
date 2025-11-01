import React, {useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CustomCarousel.css';



const CustomCarousel = ({images}) => {
  const [current, setCurrent] = useState(0);

  // Automatically change image every 2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % images.length);
    }, 3000); // 2 seconds

    return () => clearInterval(interval);
  }, [current,images.length]);


  const imageVariants = {
    enter: {
      x: 500,
      scale: 0.8,
      filter: 'blur(4px)',
      transition: {
        scale: {duration: 0.2, ease: 'easeInOut' },
        filter: {duration: 0.2, ease: 'easeInOut' },
      }
    },
    center: {
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      opacity: 1,
      transition: {
        x: { duration: 0.4, ease: 'easeInOut' },
        scale: { delay: 0.4, duration: 0.4, ease: 'easeInOut' },
        filter: { delay: 0.4, duration: 0.4, ease: 'easeInOut' },
      },
    },
    exit: {
      x: -500,
      scale: 0.8,
      filter: 'blur(4px)',
      transition: {
        scale: { duration: 0.2, ease: 'easeInOut' },
        filter: { duration: 0.2, ease: 'easeInOut' },
        x: { delay: 0.2, duration: 0.4, ease: 'easeInOut' },
      },
    },
  };

  return (
    <div className="carousel-container">
      <AnimatePresence mode={"wait"}>
        <motion.div
          key={current}
          className="iphone-frame"
          style={{position: 'absolute', top: 0, left: 0}}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <img
            src={images[current]}
            alt={`Slide ${current}`}
            style={{borderRadius: '30px'}} // Add this line
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CustomCarousel;
