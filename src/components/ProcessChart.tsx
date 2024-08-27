import styled from 'styled-components';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartContainer = styled.div`
  background-color: #f1f3f4;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

interface ProcessChartProps {
  data: any;
}

const ProcessChart: React.FC<ProcessChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item: any) => item.timestamp),
    datasets: [
      {
        label: 'Production Rate',
        data: data.map((item: any) => item.productionRate),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <ChartContainer>
      <h2>Production Rate Over Time</h2>
      <Line data={chartData} />
    </ChartContainer>
  );
};

export default ProcessChart;