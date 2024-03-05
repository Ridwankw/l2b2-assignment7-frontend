import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800 text-white py-8"
    >
      <div className="max-w-4xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <ul className="flex flex-col space-x-4">
            <li>
              <a
                href="https://twitter.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="/disaster-preparedness">Disaster Preparedness</a>
            </li>
            <li>
              <a href="/healthcare-providers">For Healthcare Providers</a>
            </li>
            <li>
              <a href="/donate">Donate Now</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
