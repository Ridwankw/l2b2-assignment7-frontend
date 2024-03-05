import { motion } from "framer-motion";
const AboutUsSection = () => {
  return (
    <div className="about-us-section py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold mb-8"
          >
            Summary
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg mb-8"
          >
            Welcome to Meddox, where our mission is to [briefly describe the
            platform's mission and objectives].
          </motion.p>
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold mb-8"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg mb-8"
          >
            At Meddox, we are dedicated to [providing context about the
            platform, its origins, and its values].
          </motion.p>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold mb-8"
          >
            Who Are We
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg mb-8"
          >
            We are a team of [professionals, experts, enthusiasts, etc.]
            committed to [briefly describe the team's expertise and commitment].
          </motion.p>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold mb-8"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg mb-8"
          >
            Our focus is on [post-disaster community health and medical supply
            chain management], working towards [specific goals or objectives].
          </motion.p>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg mb-8"
          >
            [Additional details about the impact of the platform, success
            stories, or key achievements can be included here.]
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
