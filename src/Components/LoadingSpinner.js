import { Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Spinner size="xl" thickness="4px" speed="0.65s" color="blue.500" />
  </motion.div>
);

export default LoadingSpinner;
