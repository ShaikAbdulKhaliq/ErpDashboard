import React, { useState } from 'react';
import { Box, VStack, Text, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { FaBoxes, FaDollarSign, FaUser, FaChartLine, FaBriefcase, FaFileInvoiceDollar, FaCalendarAlt, FaFileAlt, FaGavel, FaTasks, FaIndustry, FaCogs, FaShieldAlt } from 'react-icons/fa';

const modules = [
  { name: 'Inventory', icon: FaBoxes, description: 'Manage assets and products' },
  { name: 'Finance', icon: FaDollarSign, description: 'Track income, expenses, billing, invoicing, and more' },
  { name: 'Employee', icon: FaUser, description: 'Employee monitoring, payroll, and attendance' },
  { name: 'CRM', icon: FaChartLine, description: 'Manage communication and data' },
  { name: 'Sales & Marketing', icon: FaBriefcase, description: 'Planning, reporting, and more' },
  { name: 'Supplier & Vendor', icon: FaFileInvoiceDollar, description: 'Manage ordering, billing, storekeeping' },
  { name: 'Front Office', icon: FaCalendarAlt, description: 'Appointments, inquiries, logs' },
  { name: 'Document', icon: FaFileAlt, description: 'Create, collaborate, store, sign documents' },
  { name: 'Compliance', icon: FaGavel, description: 'Manage legal reporting and compliance' }
];

const Sidebar = ({ setCurrentModule }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => setIsCollapsed(!isCollapsed);

  return (
    <motion.div
      animate={{ width: isCollapsed ? 80 : 250 }}
      transition={{ duration: 0.5 }}
    >
      <Box 
        bg="blue.900" 
        color="white" 
        h="100vh" 
        p={isCollapsed ? "2" : "4"}
        display="flex"
        flexDirection="column"
      >
        <IconButton
          aria-label="Toggle Sidebar"
          icon={isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          onClick={handleToggle}
          mb="4"
          colorScheme="teal"
        />
        
        <VStack alignItems="flex-start" spacing={4} overflow="hidden">
          {modules.map((module, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              transition={{ duration: 0.3 }}
              onClick={() => setCurrentModule(module)}
              style={{ width: '100%', cursor: 'pointer', padding: '10px', borderRadius: '10px' }}
            >
              <Box display="flex" alignItems="center">
                <module.icon size={24} />
                {!isCollapsed && (
                  <Text ml={4} fontSize="lg" fontWeight="bold">
                    {module.name}
                  </Text>
                )}
              </Box>
            </motion.div>
          ))}
        </VStack>
      </Box>
    </motion.div>
  );
};

export default Sidebar;
