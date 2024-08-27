import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProcessData, updateProcessData } from '../store/processSlice';
import ProcessChart from './ProcessChart';
import MetricsPanel from './MetricsPanel';
import { AppDispatch, RootState } from '../store/store';
import { ipcRenderer } from 'electron';
import styled from 'styled-components';

const ReturnButton = styled.button`
  background-color: #1a73e8;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const AnotherDashboard: React.FC = () => {
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
    window.location.href = '/'; // Return to the main screen
  };

  return (
    <div className="dashboard">
      <h1>Another Dashboard</h1>
      <ReturnButton onClick={handleReturn}>Return to Main Screen</ReturnButton>
      <MetricsPanel data={processData} />
      <ProcessChart data={processData} />
    </div>
  );
};

export default AnotherDashboard;