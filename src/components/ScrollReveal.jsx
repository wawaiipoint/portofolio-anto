import { motion } from 'framer-motion';

const ScrollReveal = ({ children, direction = "up", delay = 0 }) => {
  // Menentukan arah datangnya elemen
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ 
        once: true, // Animasi hanya jalan sekali saat di-scroll ke bawah
        amount: 0.2 // Elemen harus terlihat 20% dulu baru animasi mulai
      }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.25, 0, 1], // Custom cubic-bezier untuk efek smooth & mewah
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;