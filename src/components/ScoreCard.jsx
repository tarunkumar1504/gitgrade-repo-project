import { motion } from "framer-motion";

const ScoreCard = ({ score, level }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className=" from-indigo-600 to-purple-600 p-6 rounded-xl text-center"
    >
      <p className="text-4xl font-bold">{score} / 100</p>
      <p className="text-lg mt-1">{level}</p>
    </motion.div>
  );
};

export default ScoreCard;
