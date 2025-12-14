import { motion } from "framer-motion";

const Roadmap = ({ steps }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gray-900 p-6 rounded-lg"
    >
      <h2 className="text-xl font-semibold mb-4">
        Personalized Roadmap
      </h2>
      <ul className="space-y-2">
        {steps.map((step) => (
          <li key={step.step} className="text-gray-300">
            🔹 {step.action}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Roadmap;
