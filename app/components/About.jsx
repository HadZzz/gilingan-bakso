'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={containerRef} id="tentang" className="py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ scale, opacity }}
            className="relative h-[400px] md:h-[500px] transform transition-all duration-700"
          >
            <Image
              src="/images/about.jpeg"
              alt="Gilingan Bakso Modern Mas Wandi"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Tentang Gilingan Bakso Ikan dan Daging Mas Wandi
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sejak tahun 90 an, Gilingan Bakso Mas Wandi telah menjadi mitra terpercaya bagi pedagang bakso di Malingping. 
              Kami menyediakan jasa penggilingan daging dan ikan premium menggunakan mesin modern dan higienis dengan harga gilingan baut Rp 5.000 per kg.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Buka setiap hari dari jam 5 sampai jam 10 pagi. Komitmen kami adalah mendukung kesuksesan bisnis bakso Anda dengan menyediakan
              layanan penggilingan berkualitas tinggi untuk membantu mengembangkan usaha bakso Anda.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent mb-2">30+</h3>
                <p className="text-gray-600">Tahun Melayani</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent mb-2">20+</h3>
                <p className="text-gray-600">Pedagang Bakso</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
