import React from 'react';
import Dashboard from './components/Dashboard';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
  <>
    <GlobalStyle />
    <div className="app">
      <Dashboard />
    </div>
  </>
);

export default App;