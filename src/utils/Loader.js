import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Loader = () => {
  const isLoading = useSelector((state) => state.loader.isLoading);
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-60 z-50">
      <BarLoader />
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.3,
    opacity: 0.5,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.15,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-2"
    >
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          variants={variants}
          className="h-12 w-2 rounded bg-gradient-to-b from-teal-400 to-teal-600"
        />
      ))}
    </motion.div>
  );
};

export default Loader;
