import Image from "next/image";

import Navbar from './components/Navbar';
import Hero from './components/Hero';

import About from './components/About';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Location />
      <FAQ />
      <Footer />
    </main>
  );
}
