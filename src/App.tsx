import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import MainScreen from './components/MainScreen';
import Dashboard from './components/Dashboard';
import AnotherDashboard from './components/AnotherDashboard';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/another-dashboard" element={<AnotherDashboard />} />
      </Routes>
    </Router>
  </>
);

export default App;