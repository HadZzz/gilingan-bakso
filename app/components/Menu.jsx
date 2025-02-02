'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const menuItems = [
  {
    name: 'Jasa Giling Daging Premium',
    description: 'Penggilingan daging menggunakan mesin modern dengan hasil yang halus dan higienis',
    price: 'Rp 15.000/kg',
    image: '/images/menu .jpeg'
  },
  {
    name: 'Bumbu Bakso Spesial',
    description: 'Racikan bumbu bakso rahasia yang membuat bakso lebih enak dan gurih',
    price: 'Rp 25.000/pack',
    image: '/images/menu 1.jpeg'
  },
  {
    name: 'Paket Bahan Bakso Komplit',
    description: 'Paket lengkap bahan pembuat bakso termasuk daging dan bumbu berkualitas',
    price: 'Rp 150.000/pack',
    image: '/images/menu 2.jpeg'
  }
];

const Menu = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: 0.8
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: 'tween',
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="layanan" className="py-16 bg-gradient-to-b from-gray-50 to-white w-full overflow-x-hidden">
      <div className="container mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Layanan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan penggilingan daging dan bahan-bahan bakso berkualitas
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-200 hover:shadow-xl"
              whileHover="hover"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-orange-600 font-bold text-lg flex items-center gap-2">
                  <span className="text-sm text-gray-500">Mulai dari</span>
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
