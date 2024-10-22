// src/App.js

import React, { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Sidebar from './Components/Sidebar';
import SalesChart from './Components/SalesChart';

function App() {
  const [currentModule, setCurrentModule] = useState(null);

  return (
    <ChakraProvider>
      <Box display="flex">
        <Sidebar setCurrentModule={setCurrentModule} />
        <Box flex="1" p={4} bg="gray.100">
          <Box mb={4}>
            <h1>{currentModule ? currentModule.name : 'Select a Module'}</h1>
            {currentModule && <p>{currentModule.description}</p>}
          </Box>
          <SalesChart />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
