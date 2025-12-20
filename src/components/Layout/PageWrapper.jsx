import { motion } from "framer-motion";

export default function PageWrapper({ children, animation }) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={animation}>
      {children}
    </motion.div>
  );
}
 