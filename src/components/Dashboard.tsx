import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProcessData, updateProcessData } from '../store/processSlice';
import ProcessChart from './ProcessChart';
import MetricsPanel from './MetricsPanel';
import { AppDispatch, RootState } from '../store/store';
import { ipcRenderer } from 'electron';

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

  return (
    <div className="dashboard">
      <h1>Manufacturing Process Dashboard</h1>
      <MetricsPanel data={processData} />
      <ProcessChart data={processData} /> {/* Pass the data to the chart */}
    </div>
  );
};

export default Dashboard;