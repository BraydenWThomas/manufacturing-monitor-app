import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAnotherProcessData, updateAnotherProcessData } from '../store/anotherProcessSlice';
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

const AnotherDashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const anotherProcessData = useSelector((state: RootState) => state.anotherProcess.data);

  useEffect(() => {
    dispatch(fetchAnotherProcessData());

    ipcRenderer.on('another-process-update', (_, data) => {
      dispatch(updateAnotherProcessData(data));
    });

    return () => {
      ipcRenderer.removeAllListeners('another-process-update');
    };
  }, [dispatch]);

  const handleReturn = () => {
    window.location.href = '/';
  };

  return (
    <DashboardContainer>
      <Header>Another Dashboard</Header>
      <ReturnButton onClick={handleReturn}>Return to Main Screen</ReturnButton>
      <MetricsPanel data={anotherProcessData} />
      <ChartWrapper>
        <ProcessChart data={anotherProcessData} />
      </ChartWrapper>
    </DashboardContainer>
  );
};

export default AnotherDashboard;
