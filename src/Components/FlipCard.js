import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const FlipCard = () => (
  <motion.div
    whileHover={{ rotateY: 180 }}
    style={{
      perspective: 1000,  // Adds 3D perspective to the flip
      width: 300,
      height: 200,
      position: 'relative'
    }}
  >
    <Box
      position="absolute"
      width="100%"
      height="100%"
      bg="cyan.500"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backfaceVisibility="hidden"
    >
      Front Side
    </Box>
    <Box
      position="absolute"
      width="100%"
      height="100%"
      bg="blue.500"
      display="flex"
      justifyContent="center"
      alignItems="center"
      transform="rotateY(180deg)"
      backfaceVisibility="hidden"
    >
      Back Side
    </Box>
  </motion.div>
);

export default FlipCard;
