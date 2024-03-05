import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      author: "Dr. Sarah Johnson",
      role: "Emergency Room Physician",
      content:
        "The platform's timely supply of medical resources has been instrumental in our ability to provide immediate care during post-disaster situations. It's a game-changer for healthcare providers on the front lines.",
    },
    {
      author: "Nurse Michael Rodriguez",
      role: "Community Health Nurse",
      content:
        "Being part of the platform has strengthened our disaster response capabilities. The streamlined supply chain ensures that essential medical supplies reach the communities we serve, making a significant impact on recovery efforts.",
    },
  ];

  return (
    <div className="testimonials-section py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Healthcare Provider Testimonials
        </h2>

        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="mb-8"
          >
            <p className="text-lg mb-4">{testimonial.content}</p>
            <p className="text-gray-600">
              {testimonial.author}, {testimonial.role}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
