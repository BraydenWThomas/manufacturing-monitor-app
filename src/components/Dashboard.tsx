import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProcessData, updateProcessData } from '../store/processSlice';
import ProcessChart from './ProcessChart';
import MetricsPanel from './MetricsPanel';
import { AppDispatch, RootState } from '../store/store';
import { ipcRenderer } from 'electron';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #f0f2f5;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #1a73e8;
  text-align: center;
  margin-bottom: 20px;
`;

const ReturnButton = styled.button`
  background-color: #1a73e8;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1558b0;
  }
`;

const ChartWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
`;

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const processData = useSelector((state: RootState) => state.process.data);

  useEffect(() => {
    dispatch(fetchProcessData());

    ipcRenderer.on('process-update', (_, data) => {
      dispatch(updateProcessData(data));
    });

    return () => {
      ipcRenderer.removeAllListeners('process-update');
    };
  }, [dispatch]);

  const handleReturn = () => {
    window.location.href = '/';
  };

  return (
    <DashboardContainer>
      <Header>Manufacturing Process Dashboard</Header>
      <ReturnButton onClick={handleReturn}>Return to Main Screen</ReturnButton>
      <MetricsPanel data={processData} />
      <ChartWrapper>
        <ProcessChart data={processData} />
      </ChartWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
