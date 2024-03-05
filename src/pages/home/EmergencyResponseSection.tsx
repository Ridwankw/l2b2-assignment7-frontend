import { motion } from "framer-motion";

const EmergencyResponseSection = () => {
  const protocols = [
    "Immediate assessment of medical supply needs in affected areas.",
    "Coordination with healthcare providers for rapid deployment of resources.",
    "Real-time monitoring of inventory levels to address shortages promptly.",
  ];

  return (
    <div className="emergency-response-section py-16 rounded-md bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">
          Emergency Response Protocols
        </h2>

        <ul className="list-disc list-inside mb-8">
          {protocols.map((protocol, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-lg mb-2"
            >
              {protocol}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default EmergencyResponseSection;
