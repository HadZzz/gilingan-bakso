'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              Gilingan Bakso Mas Wandi
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#beranda" className="text-gray-900 hover:text-orange-600 transition-colors">Beranda</Link>
            <Link href="#tentang" className="text-gray-900 hover:text-orange-600 transition-colors">Tentang Kami</Link>
            <Link href="#lokasi" className="text-gray-900 hover:text-orange-600 transition-colors">Lokasi</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none text-gray-700 hover:text-orange-600"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 max-h-64 translate-y-0'
            : 'opacity-0 max-h-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#beranda"
              className="block px-3 py-2 rounded-md text-gray-900 hover:text-orange-600 hover:bg-gray-50 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="#tentang"
              className="block px-3 py-2 rounded-md text-gray-900 hover:text-orange-600 hover:bg-gray-50 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="#lokasi"
              className="block px-3 py-2 rounded-md text-gray-900 hover:text-orange-600 hover:bg-gray-50 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Lokasi
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
