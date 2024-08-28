import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartContainer = styled.div`
  width: 100%;              // Full width of the parent container
  height: 100%;             // Full height of the parent container
  max-height: 600px;        // Optional: Max height to avoid stretching too much
  background-color: #f1f3f4;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

interface ProcessChartProps {
  data: any[];
}

const ProcessChart: React.FC<ProcessChartProps> = ({ data }) => {
  const getTimeAgoLabel = (index: number) => {
    const secondsAgo = 60 - index; // Calculate how many seconds ago this point was
    return `${secondsAgo} sec ago`;
  };

  const chartData = {
    labels: data.map((_, index) => getTimeAgoLabel(index)),
    datasets: [
      {
        label: 'Production Rate',
        data: data.map((item) => item.productionRate || 0), // Default to 0 if undefined
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    maintainAspectRatio: false,   // Disable aspect ratio to allow flexible resizing
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Time',
        },
        ticks: {
          callback: function(value, index) {
            return index % 10 === 0 ? value : ''; // Show label every 10 intervals (10 seconds)
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Production Rate',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <ChartContainer>
      <Line data={chartData} options={options} />
    </ChartContainer>
  );
};

export default ProcessChart;
