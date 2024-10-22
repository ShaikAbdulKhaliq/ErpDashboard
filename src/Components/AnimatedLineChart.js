import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Apr', income: 2780, expense: 3908 },
];

const AnimatedLineChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={3} />
        <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </motion.div>
  );
};

export default AnimatedLineChart;
