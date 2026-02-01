import React from 'react';
import { Layout } from './components';
import { Home } from './pages/Home';
import { personalInfo } from './data/portfolioData';
import './App.css';

const App: React.FC = () => {
  return (
    <Layout personalInfo={personalInfo}>
      <Home />
    </Layout>
  );
};

export default App;
