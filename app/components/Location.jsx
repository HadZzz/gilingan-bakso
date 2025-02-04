'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Location = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="lokasi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lokasi Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kunjungi warung kami di Malingping dan nikmati kelezatan bakso yang tak terlupakan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Alamat</h3>
            <p className="text-gray-600 mb-4">
              Jl. Raya Ps. Malingping No.3<br />
              Malingping Selatan, Kec. Malingping<br />
              Kabupaten Lebak, Banten 42391<br />
              Indonesia
            </p>
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Jam Operasional:</h4>
              <ul className="text-gray-600">
                <li>Setiap Hari: 05:00 - 10:00</li>
              </ul>
            </div>
            <a
              href="https://maps.app.goo.gl/RbYrNVEenHS85DuBA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors"
            >
              Petunjuk Arah
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2988685525293!2d106.31382661477226!3d-6.761229395218578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e428e2f95555555%3A0x4444444444444444!2sGilingan%20Bakso%20Mas%20Wandi!5e0!3m2!1sen!2sid!4v1707050184!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
