import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ModuleContent from './ModuleContent';
import { Box } from '@chakra-ui/react';

const Dashboard = () => {
  const [currentModule, setCurrentModule] = useState(null);

  return (
    <Box display="flex">
      <Sidebar setCurrentModule={setCurrentModule} />
      <Box flex={1} bg="gray.50" p={8}>
        <ModuleContent currentModule={currentModule} />
      </Box>
    </Box>
  );
};

export default Dashboard;
