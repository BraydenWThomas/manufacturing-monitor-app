import React from 'react';
import styled from 'styled-components';

const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f3f4;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Metric = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

interface MetricsPanelProps {
  data: any;
}

const MetricsPanel: React.FC<MetricsPanelProps> = ({ data }) => {
  const latestData = data[data.length - 1] || {};

  return (
    <MetricsContainer>
      <Metric>Production Rate: {latestData.productionRate || 'N/A'}</Metric>
      <Metric>Machine Status: {latestData.machineStatus || 'N/A'}</Metric>
      <Metric>Quality Control: {latestData.qualityControl || 'N/A'}</Metric>
    </MetricsContainer>
  );
};

export default MetricsPanel;