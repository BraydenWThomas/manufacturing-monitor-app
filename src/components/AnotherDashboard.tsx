import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAnotherProcessData, updateAnotherProcessData } from '../store/anotherProcessSlice'; // Create this slice
import ProcessChart from './ProcessChart';
import MetricsPanel from './MetricsPanel';
import { AppDispatch, RootState } from '../store/store';
import { ipcRenderer } from 'electron';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #1a73e8;
  text-align: center;
  margin-bottom: 40px;
`;

const ReturnButton = styled.button`
  background-color: #1a73e8;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 40px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1558b0;
  }
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
      <ProcessChart data={anotherProcessData} />
    </DashboardContainer>
  );
};

export default AnotherDashboard;
