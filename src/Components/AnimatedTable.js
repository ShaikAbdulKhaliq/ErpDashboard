import { useTable } from 'react-table';
import { motion } from 'framer-motion';
import { Table, Tbody, Tr, Td } from '@chakra-ui/react';

const AnimatedTable = ({ columns, data }) => {
  const { getTableBodyProps, rows, prepareRow } = useTable({ columns, data });

  return (
    <Table variant="simple">
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <motion.tr
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              {...row.getRowProps()}
            >
              {row.cells.map(cell => (
                <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              ))}
            </motion.tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default AnimatedTable;
