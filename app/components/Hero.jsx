'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <section ref={ref} id="beranda" className="relative h-screen flex items-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 z-10" />
        <Image
          src="/images/bg-hero.jpeg"
          alt="Bakso Mas Wandi Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y: textY }}
            className="text-white relative z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
              Gilingan Bakso & Bumbu Mas Wandi
            </h1>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Jasa Penggilingan Daging Premium & Supplier Bumbu Bakso Berkualitas
            </motion.p>
            <motion.a
              href="#layanan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Lihat Layanan
            </motion.a>
          </motion.div>
        </div>
      </div>
      

    </section>
  );
};

export default Hero;
