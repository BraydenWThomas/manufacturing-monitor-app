import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a73e8;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DashboardButton = styled.button`
  background-color: #1a73e8;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
`;

const MainScreen: React.FC = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const goToAnotherDashboard = () => {
    navigate('/another-dashboard'); // Navigate to another dashboard
  };

  return (
    <MainContainer>
      <Title>Welcome to the Manufacturing Monitor</Title>
      <ButtonContainer>
        <DashboardButton onClick={goToDashboard}>Go to Dashboard</DashboardButton>
        <DashboardButton onClick={goToAnotherDashboard}>Go to Another Dashboard</DashboardButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default MainScreen;