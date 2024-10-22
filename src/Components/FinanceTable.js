import React from 'react';
import AnimatedTable from './AnimatedTable';

const FinanceTable = () => {
  const data = React.useMemo(
    () => [
      { id: 1, income: '$5000', expenses: '$2000', forecast: '$3000' },
      { id: 2, income: '$8000', expenses: '$4000', forecast: '$4000' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Income', accessor: 'income' },
      { Header: 'Expenses', accessor: 'expenses' },
      { Header: 'Forecast', accessor: 'forecast' },
    ],
    []
  );

  return <AnimatedTable columns={columns} data={data} />;
};

export default FinanceTable;
