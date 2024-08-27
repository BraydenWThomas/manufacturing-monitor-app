import React from 'react';
import styled from 'styled-components';
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
  flex-direction: column;
  gap: 20px;
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

  &:hover {
    background-color: #1558b0;
  }
`;

const MainScreen: React.FC = () => {
  const navigate = useNavigate();

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
        <DashboardButton onClick={goToDashboard}>Go to Manufacturing Process Dashboard</DashboardButton>
        <DashboardButton onClick={goToAnotherDashboard}>Go to Another Dashboard</DashboardButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default MainScreen;
