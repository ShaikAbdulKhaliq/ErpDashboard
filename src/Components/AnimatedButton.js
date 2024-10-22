import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

const AnimatedButton = () => (
  <MotionButton
    whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)' }}
    whileTap={{ scale: 0.9 }}
    bg="cyan.400"
    color="white"
  >
    Click Me
  </MotionButton>
);

export default AnimatedButton;
