import React from 'react';
import { Box, Text, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react';

const ModuleContent = ({ currentModule }) => {
  if (!currentModule) {
    return (
      <Box p={6}>
        <Text fontSize="lg" color="white">Select a module from the sidebar</Text>
      </Box>
    );
  }

  return (
    <Box p={6}>
      <Heading as="h1" size="xl" mb={4} color="white">
        {currentModule.name}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Card bg="white" borderRadius="md" boxShadow="lg">
          <CardHeader>
            <Heading size="md">Overview</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize="lg">{currentModule.description}</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">Learn More</Button>
          </CardFooter>
        </Card>
        {/* You can add more cards with additional information about the module here */}
      </SimpleGrid>
    </Box>
  );
};

export default ModuleContent;
