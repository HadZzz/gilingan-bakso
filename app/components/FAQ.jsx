'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Berapa harga jasa penggilingan daging bakso di Malingping?',
    answer: 'Harga jasa penggilingan daging bakso di Gilingan Bakso Mas Wandi Malingping mulai dari Rp 15.000/kg untuk penggilingan standar. Kami juga menyediakan paket lengkap termasuk bumbu dengan harga yang bersaing.'
  },
  {
    question: 'Apakah gilingan bakso Mas Wandi bersertifikat halal?',
    answer: 'Ya, Gilingan Bakso Mas Wandi telah bersertifikat halal dan menggunakan mesin modern dengan standar higienis tinggi. Kami berkomitmen menjaga kualitas dan kehalalan produk sejak 2010.'
  },
  {
    question: 'Di mana lokasi Gilingan Bakso Mas Wandi di Malingping?',
    answer: 'Gilingan Bakso Mas Wandi berlokasi strategis di Jl. Raya Ps. Malingping No.3, Malingping Selatan, Kec. Malingping, Kabupaten Lebak, Banten 42391. Mudah dijangkau dari pasar Malingping.'
  },
  {
    question: 'Apa saja layanan yang tersedia di Gilingan Bakso Mas Wandi?',
    answer: 'Kami menyediakan jasa penggilingan daging premium, penjualan bumbu bakso spesial, dan paket lengkap bahan bakso. Semua menggunakan mesin modern dan dijamin kualitasnya.'
  },
  {
    question: 'Berapa lama proses penggilingan daging bakso?',
    answer: 'Proses penggilingan daging bakso di tempat kami rata-rata memakan waktu 15-30 menit tergantung jumlah daging. Kami mengutamakan kualitas hasil gilingan yang halus dan higienis.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            Pertanyaan Umum
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan Gilingan Bakso Mas Wandi Malingping
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <span className={`transform transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
