import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="flex justify-center mt-8 text-indigo-400 text-lg"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      Analyzing repository...
    </motion.div>
  );
};

export default Loader;
