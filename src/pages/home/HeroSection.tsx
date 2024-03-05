import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="hero-section bg-cover bg-slate-200 rounded-md bg-center h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hero-content text-start text-black"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Meddox</h1>
        <p className="text-lg mb-8">
          Empowering communities through post-disaster health and medical supply
          chain management.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white px-6 py-3 rounded-full text-lg"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
