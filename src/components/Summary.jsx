import { motion } from "framer-motion";

const Summary = ({ text }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gray-900 p-6 rounded-lg"
    >
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <p className="text-gray-300">{text}</p>
    </motion.div>
  );
};

export default Summary;
