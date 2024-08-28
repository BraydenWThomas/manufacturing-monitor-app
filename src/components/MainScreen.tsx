import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #1a73e8;
  margin-bottom: 40px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;  // Align buttons vertically
  gap: 30px;
`;

const ButtonWithStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px; // Adjust as needed
`;

const DashboardButton = styled.button`
  background-color: #1a73e8;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s;
  width: 300px; // Adjust as needed

  &:hover {
    background-color: #1558b0;
  }
`;

const StatusBox = styled.div<{ status: string }>`
  width: 20px;
  height: 20px;
  margin-left: 15px;
  background-color: ${(props) =>
    props.status === 'Running' || props.status === 'Operational' ? 'green' : 'red'};  // Show green or red based on status
  border-radius: 4px;
`;

const MainScreen: React.FC = () => {
  const navigate = useNavigate();

  const machineStatus = useSelector((state: RootState) => state.process.data[0]?.machineStatus || 'Unknown');
  const anotherMachineStatus = useSelector((state: RootState) => state.anotherProcess.data[0]?.machineStatus || 'Unknown');

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const goToAnotherDashboard = () => {
    navigate('/another-dashboard');
  };

  return (
    <MainContainer>
      <Title>Manufacturing Monitor</Title>
      <ButtonContainer>
        <ButtonWithStatus>
          <DashboardButton onClick={goToDashboard}>Go to Manufacturing Dashboard</DashboardButton>
          <StatusBox status={machineStatus} />
        </ButtonWithStatus>
        <ButtonWithStatus>
          <DashboardButton onClick={goToAnotherDashboard}>Go to Another Dashboard</DashboardButton>
          <StatusBox status={anotherMachineStatus} />
        </ButtonWithStatus>
      </ButtonContainer>
    </MainContainer>
  );
};

export default MainScreen;
